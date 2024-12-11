const express = require("express");
// const mysql = require('mysql');
const mysql = require("mysql2");
require("dotenv").config();
const routes = require("./routes/index.route");
const cors = require("cors");
const corsOptions = require("./config/cors.config");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to the database:", err);
    return;
  }
  console.log("Connected to the MySQL database.");
});

app.use("/api", routes);
