var fs = require("fs");
require("dotenv").config();
fs.writeFile(
  process.env.GOOGLE_APPLICATION_CREDENTIALS,
  process.env.GCP_CRED,
  (err) => {
    if (err) console.error(err);
    else console.log("gcp key written successfully");
  }
);
