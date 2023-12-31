const express = require("express");
const os = require("os");
require("dotenv").config();
require("./config/db").connect();
const authRoutes = require("./routes/auth");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT;

// set body parser
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());
//set cors
const corsOptions = {
  origin: "*",
};
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send(`Hello from ${os.hostname()}`);
});

app.use("/api", authRoutes());
app.listen(PORT, () => console.log(`App started on port ${PORT}`));
