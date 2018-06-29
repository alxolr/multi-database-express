const mongoose = require('mongoose');

module.exports = mongooseConnector;

function mongooseConnector(uri) {
  return {
    connect,
  }

  async function connect() {
    return await mongoose.connect(uri)
  }
}

