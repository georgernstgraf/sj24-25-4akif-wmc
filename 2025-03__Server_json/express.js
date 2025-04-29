const express = require("express");
const session = require("express-session");
const path = require("path");
const fs = require("fs");
const app = express();
const port = 3000;

const student = {
  name: "John",
  age: 20,
};

app.use(session({
  secret: "keyboard cat",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
  name: "sid",
}));
app.use(express.json());

app.get("/", (req, res) => {
  // Check if session is new or existing
  req.session.student = student;
  if (!req.session.views) {
    req.session.views = 1;
  } else {
    req.session.views++;
  }
  // Send index.html from static/ if it exists, otherwise fallback
  const indexPath = path.join(__dirname, "static", "index.html");
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.send("Hello World!" + `gesehen: ${req.session.views} mal`);
  }
  console.log("Session ID:", req.sessionID);
  console.log("Session:", req.session);
});

app.get("/student", (req, res) => {
  res.send(JSON.stringify(req.session.student));
});

app.get("/params", (req, res) => {
  res.send(JSON.stringify(req.query));
});
app.post("/params", (req, res) => {
  res.send(JSON.stringify(req.body));
});
app.post("/form", (req, res) => {
  res.send(JSON.stringify(req.body));
});
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
