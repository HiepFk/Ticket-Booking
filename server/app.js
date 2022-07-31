const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cookieParser = require("cookie-parser");

const globalErrorHandler = require("./src/middleware/errorHandle");

const userRoute = require("./src/routes/userRoute");
const movieRoute = require("./src/routes/movieRoute");
const cinemaRoute = require("./src/routes/cinemaRoute");
const roomRoute = require("./src/routes/roomRoute");
const scheduleRoute = require("./src/routes/scheduleRoute");
const foodRoute = require("./src/routes/foodRoute");
const newsRoute = require("./src/routes/newsRoute");

const ticketRoute = require("./src/routes/ticketRoute");
const reviewRoute = require("./src/routes/reviewRoute");

const corsOptions = require("./src/config/corsOptions");
const credentials = require("./src/middleware/credentials");

const app = express();

app.use(credentials);
app.use(cors(corsOptions));

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
app.use("/v1/cinema", cinemaRoute);
app.use("/v1/room", roomRoute);
app.use("/v1/schedule", scheduleRoute);
app.use("/v1/food", foodRoute);
app.use("/v1/news", newsRoute);

app.use("/v1/ticket", ticketRoute);
app.use("/v1/review", reviewRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
