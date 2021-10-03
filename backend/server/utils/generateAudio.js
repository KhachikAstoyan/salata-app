const textToSpeech = require("@google-cloud/text-to-speech");
require("dotenv").config();

// Import other required libraries
const fs = require("fs");
const util = require("util");
const path = require("path");
// Creates a client
const client = new textToSpeech.TextToSpeechClient();

module.exports = async function generateAudio(item, delay = 1) {
  // The text to synthesize
  const text = "hello, world!";
  const audioPath = path.resolve(__dirname, "..", "static", `${audioName}.mp3`);

  // Construct the request
  const request = {
    input: { text: text },
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
  console.log("Audio content written to file: ../static/output.mp3");
};
