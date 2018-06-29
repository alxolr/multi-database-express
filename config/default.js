module.exports = {
  adapter: process.env.DB_ADAPTER || 'mysql',
  mysql: 'mysql://localhost:3306/tasks',
  mongo: 'mongodb://localhost:27017/tasks',
  port: process.env.PORT || 8080,
}
