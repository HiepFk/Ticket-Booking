const allowedOrigins = [
  process.env.CLIENT_URL,
  process.env.ADMIN_URLL,
  "https://cinema-ticket-admin.netlify.app",
  "https://cinema-ticket-fk.netlify.app",
  "http://localhost:1208",
  "http://localhost:3000",
];

module.exports = allowedOrigins;
