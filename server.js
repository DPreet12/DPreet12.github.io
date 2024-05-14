const express = require("express");
const app = express();
const methodOverride = require("method-override");
const PORT = process.env.PORT || 3000;
require("dotenv").config();

app.use(methodOverride("_method"));
app.set("view engine", "ejs");
app.use("/", express.static("public"));
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.get("/", (req,res) => {
    res.json({message: "Email Contact Form"});
})

app.get("/contact", (req,res) => {
    res.render("contact", {});
})

app.listen(PORT, ()=> console.log("Server listening on PORT", PORT))