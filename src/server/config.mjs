export default {
  port: parseInt(process.env.PORT || '8080', 10),
  mongoConnectionString: process.env.MONGO_CONNECTION_STRING,
}
