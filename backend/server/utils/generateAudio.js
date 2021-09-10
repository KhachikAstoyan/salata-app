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
        const audioName = `${String(id)}-${delay}s-[${language}].mp3`
        const audioPath = path.resolve(__dirname, '..', 'static', `${audioName}`);
        const returnObject = { data: path.join('static', audioName) };
        const breakMarkup = `<break time="${delay}s"/>`

        console.log(breakMarkup);

        if (fs.existsSync(audioPath)) {
            return returnObject;
        };

        const target = language.split('-')[0];
        let ingredientData = await Item.findIngredients(id);
        ingredientData = ingredientData.map(ingredient => ingredient.name);
        let ingredientString = ingredientData.map(ingredient => `${ingredient} ${breakMarkup}`).join(' ');
        let extraTitle = 'extra information';
        let extraInfo = extra.join(' ');

        if (target !== 'en') {
            const [translatedIngredients] = await translate.translate(ingredientData, target)
            ingredientString = translatedIngredients.map(ingredient => `${ingredient} ${breakMarkup}`).join(' ');
            [extraTitle] = await translate.translate(extraTitle, target);
            [extraInfo] = await translate.translate(extraInfo, target);
        }
        let info = `
            ${ingredientString}
            ${extraTitle} ${breakMarkup}
            ${extraInfo}
        `

        const text = `
            <speak>
                ${quantity} ${name}
                ${breakMarkup}
                ${info}
            </speak>
            `
        console.log(text);
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