const config = require('config');

const ADAPTERS = {
  MONGO: 'mongo',
  MYSQL: 'mysql',
  RAM: 'ram'
}

function adapterFactory() {
  switch (config.adapter) {
    case ADAPTERS.MONGO:
      return require('./mongo.connector')(config[ADAPTERS.MONGO]);

    case ADAPTERS.MYSQL:
      return require('./mysql.connector')(config[ADAPTERS.MYSQL]);

    default:
      return [];
  }
}

module.exports = adapterFactory;
module.exports.ADAPTERS = ADAPTERS;
