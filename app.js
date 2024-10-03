const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const authRouter = require("./routes/auth");

const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const app = express();
dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log("Database connected");
});
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/auth", authRouter);

app.use("/swagger", swaggerUi.serve, swaggerUi.setup(swaggerFile));
module.exports = app;
