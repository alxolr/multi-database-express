const express = require('express');

module.exports = function initApplication(connection) {
  const app = express();

  const taskRepository = require('./repository/task-repository.factory')(connection);
  const taskRoutes = require('./routes/task.routes')(taskRepository);

  app.use('/api/v1/tasks', taskRoutes);

  return app;
}
