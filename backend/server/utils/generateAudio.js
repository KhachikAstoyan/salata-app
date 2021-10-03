const textToSpeech = require("@google-cloud/text-to-speech");
require("dotenv").config();

// Import other required libraries
const fs = require("fs");
const util = require("util");
const path = require("path");
// Creates a client
const client = new textToSpeech.TextToSpeechClient();

const Ingredient = require("../models/Ingredient.js");

module.exports = async function generateAudio(order, delay = 1) {
  try {
    const breakMarkup = `<break time="${delay}s"/>`;
    // The text to synthesize
    const { _id: id, items } = order;
    console.log(id);
    const itemsData = await Promise.all(
      items.map(async (item) => {
        const ingredientsObj = await Ingredient.find({
          _id: { $in: item.ingredients },
        });
        const ingredients = ingredientsObj.map(
          (ingredientObj) => ingredientObj.name
        );
        console.log(ingredients);
        return { ingredients, extraInfo: item.extraInfo };
      })
    );
    let itemsStringArr = itemsData.map((item) => {
      let itemString = item.ingredients.join(" " + breakMarkup + "");
      return `
        <speak>
          ${itemString} ${breakMarkup}
          ${item.extraInfo}
        </speak>
      `;
    });
    console.log(itemsStringArr);

    await itemsStringArr.forEach(async (itemString, index) => {
      const audioPath = path.resolve(
        __dirname,
        "..",
        "static",
        `${id + index}.mp3`
      );
      // Construct the request
      const request = {
        input: { ssml: itemString },
        // Select the language and SSML voice gender (optional)
        voice: { languageCode: "en-US", ssmlGender: "FEMALE" },
        // select the type of audio encoding
        audioConfig: { audioEncoding: "MP3" },
      };

      // Performs the text-to-speech request
      const [response] = await client.synthesizeSpeech(request);
      // Write the binary audio content to a local file
      const writeFile = util.promisify(fs.writeFile);
      await writeFile(audioPath, response.audioContent, "binary");
      console.log(`Audio content written to file: ../static/${id + index}.mp3`);
    });
    // let ingredientNames = await Promise.all(
    //   ingredientIds.map(async (item) => {
    //     const ingredients = await Ingredient.find({ _id: { $in: item } });
    //     const ingNames = ingredients.map((ingredient) => ingredient.name);
    //     console.log(ingNames);
    //     return ingNames;
    //   })
    // );
  } catch (e) {
    console.error(e);
  }
};
