const mongoose = require('mongoose');
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  throw new Error('Must provide');
}

function connect() {
  mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  const db = mongoose.connection;
  db.once('open', () => console.log('CONNECTED'));
  db.on('error', error => console.log('Error connecting to MongoDB:', error));
  mongoose.set('useFindAndModify', false);
  return db;
}

module.exports = connect;
