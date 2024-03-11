const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const login = require("./models/login.js");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

main()
  .then((res) => {
    console.log("connection succesful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/spotify");
}

app.get("/spotify", (req, res) => {
  res.render("index.ejs", {name: globalName});
});

let globalName = "";

app.post("/home", async (req, res) => {
  try {
    let { name, password } = req.body;
    let newUser = new login({
      name: name,
      password: password,
    });
    await newUser.save();
    console.log("New User created");
    globalName = name;
    console.log(globalName);
    res.redirect("/spotify");
  } catch (error) {
    console.error("Error creating new user:", error);
    res.status(500).send("Error creating new user");
  }
});

app.get("/spotify/login", (req,res) => {
    res.render("login.ejs");
})

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(8080, () => {
  console.log("server is working");
});
