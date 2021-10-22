const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "",
  database: "internshipsystem",
});

app.post("/create", (req, res) => {
  const name = req.body.name;
  const date = req.body.date;
  const status = req.body.status;
  

  db.query(
    "INSERT INTO companies (name, date, status) VALUES (?,?,?)",
    [name, date, status],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send("Values inserted");
      }
    }
  );
});

app.get('/companies', (req, res) => {
    db.query("SELECT * FROM companies", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.listen(3001, () => {
  console.log("Server working on 3001");
});
