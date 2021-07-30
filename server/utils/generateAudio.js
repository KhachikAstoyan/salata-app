const tts = require("@google-cloud/text-to-speech");
const { Translate } = require('@google-cloud/translate').v2;
const client = new tts.TextToSpeechClient()
const translate = new Translate();

const fs = require('fs');
const util = require('util')
const path = require('path');
const Order = require('../models/Order');
const Item = require('../models/Item');
const writeFile = util.promisify(fs.writeFile);

module.exports = async function (item, language = "en-US", delay = 1) {
    try {

        const { _id: id, ingredients, extra, name, quantity } = item;
        const audioName = String(id) + language + '.mp3';
        const audioPath = path.resolve(__dirname, '..', 'static', `${audioName}`);
        const returnObject = { data: path.join('static', audioName) };

        if (fs.existsSync(audioPath)) {
            return returnObject;
        };

        const target = language.split('-')[0];
        let ingredientData = await Item.findIngredients(id);
        ingredientData = ingredientData.map(ingredient => ingredient.name);
        let ingredientString = ingredientData.map(ingredient => `${ingredient} <break time="1s" />`).join(' ');
        let extraTitle = 'extra information';
        let extraInfo = extra.join(' ');

        if (target !== 'en') {
            const [translatedIngredients] = await translate.translate(ingredientData, target)
            ingredientString = translatedIngredients.map(ingredient => `${ingredient} <break time="1s" />`).join(' ');
            [extraTitle] = await translate.translate(extraTitle, target);
            [extraInfo] = await translate.translate(extraInfo, target);
        }

        let info = `
            ${ingredientString}
            ${extraTitle} <break time="${delay}s" />
            ${extraInfo}
        `

        const text = `
            <speak>
                ${quantity} ${name}
                <break time="${delay}s" />
                ${info}
            </speak>
            `
        const request = {
            input: { ssml: text },
            // LANGUAGE HAS TO BE IN THIS FORMAT - [en-US]
            voice: { languageCode: language, ssmlGender: 'FEMALE' },
            audioConfig: { audioEncoding: 'MP3' },
        };

        const [response] = await client.synthesizeSpeech(request);

        await writeFile(audioPath, response.audioContent, 'binary');

        return returnObject;
    } catch (e) {
        console.log(e)
    }
}