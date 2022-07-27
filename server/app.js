const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");

const globalErrorHandler = require("./middleware/errorHandle");

const userRoute = require("./routes/userRoute");
const movieRoute = require("./routes/movieRoute");
const reviewRoute = require("./routes/reviewRoute");
const ticketRoute = require("./routes/ticketRoute");

const app = express();

const corsOptions = {
  origin: [process.env.REACT_CLIENT_URL, process.env.REACT_ADMIN_URL],
  credentials: true, //included credentials as true
};
app.use(cors(corsOptions));

app.options("/*", (_, res) => {
  res.sendStatus(200);
});

app.use(cookieParser());

app.use(morgan("common"));

app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again in an hour.",
});
app.use("/api", limiter);

app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

app.use(mongoSanitize());

app.use(xss());

app.use("/v1/user", userRoute);
app.use("/v1/movie", movieRoute);
app.use("/v1/review", reviewRoute);
app.use("/v1/ticket", ticketRoute);

app.use(globalErrorHandler);

module.exports = app;
