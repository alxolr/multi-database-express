const config = require('config');
const connector = require('./src/connectors/connector.factory');

connector()
  .connect()
  .then(loadServer)
  .catch(handleError)

function loadServer(connection) {
  const app = require('./src/app')(connection);

  app.listen(config.port, () => {
    console.log(`Server is working on http://localhost:${config.port}`);
  });
}

function handleError(error) {
  console.error(error);
}



