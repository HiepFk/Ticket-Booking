const allowedOrigins = [
  process.env.CLIENT_URL,
  "http://192.168.0.103:3000",
  "http://192.168.0.103:1208",
  "http://localhost:1208",
  "http://localhost:3000",
];

module.exports = allowedOrigins;
