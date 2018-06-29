const config = require('config');
const { ADAPTERS } = require('../connectors/connector.factory');

module.exports = initRepository;

function initRepository(connection) {
  switch (config.adapter) {
    case ADAPTERS.MONGO:
      return require('./task-mongo.repository')(connection);

    case ADAPTERS.MYSQL:
      return require('./task-mysql.repository')(connection);

    default:
      return require('./task-ram.repository')(connection);
  }
}
