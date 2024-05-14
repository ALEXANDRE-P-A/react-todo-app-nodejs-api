require("dotenv").config();
const { initTodo, postTodo, updateTodo, deleteTodo } = require("./data-init.js");

const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 3001;

const app = express();

app.use("/", express.static(path.join(__dirname, "/build")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.setHeader('Access-Control-Allow-Methods', 'PUT, PATCH, DELETE, OPTIONS');
  next();
});

app.get("/", (req, res) => {
  res.sendFile("/index.html");
});


app.get("/datajson", (req, res) => {
  try {
    res.status(201).json(initTodo);
  } catch(err) {
    console.error(err);
  }
});

app.post("/datajson", (req, res) => {
  const postedTodo = postTodo(req.body);
  res.json(postedTodo);
});

app.patch("/datajson/:id", (req, res) => {
  const updatedTodo = updateTodo(req.body);
  res.json(updatedTodo);
});

app.delete("/datajson/:id", (req, res) => {
  try {   
    deleteTodo(req.params.id);
    res.status(201).json({ "message": "ok" });
  } catch(err) {
    console.error(err);
  }
});

app.listen(PORT, _ => {
  console.log(`Application listenning at http://127.0.0.1:${PORT}`);
});