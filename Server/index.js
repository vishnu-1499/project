const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

//mySQL Connection
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "5292",
    database: "crud"
});

//Get Data
app.get("/", (req,res) => {
    const sql = "SELECT * FROM student";
    db.query(sql, (err,data) =>{
        if(err) return res.json("error");
        return res.json(data);
    });
});

//Create User Data
app.post("/create", (req,res) => {
    const sql = "INSERT INTO student (name, email, contact) VALUES (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.contact
    ]
    db.query(sql, [values], (err,data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

//Update User Data
app.put("/update/:id", (req, res) => {
    const sql = "UPDATE student SET name=?, email=?, contact=? WHERE id=?";
    const values = [
        req.body.name,
        req.body.email,
        req.body.contact
    ]
    const id = req.params.id;
    db.query(sql, [...values, id], (err,data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

//Delete User Data
app.delete("/student/:id", (req, res) => {
    const sql = "DELETE FROM student WHERE id=?";
    const id = req.params.id;
    db.query(sql, [id], (err, data) => {
        if(err) return res.json("error");
        return res.json(data);
    })
})

//Listen
app.listen(5000, () => {
    console.log("Listen on PORT 5000:");
})