const express = require("express");
// const mysql = require('mysql');
const mysql = require("mysql2");
require("dotenv").config();
const routes = require("./routes/index.route");
const cors = require("cors");
const corsOptions = require("./config/cors.config");
const app = express();
const port = process.env.PORT || 3000;
const conn = require("./config/dbConn");

app.use(express.json());
app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, "0.0.0.0", () => {
  console.log(`Server is running on http://localhost:${port}`);
});

const db = conn.getDbConnection();

// ✅ Check connection with a simple query
db.raw("SELECT 1")
  .then(() => {
    console.log("Connected to the MySQL database.");
  })
  .catch((err) => {
    console.error("Error connecting to the database:", err);
  });

app.use("/api", routes);
