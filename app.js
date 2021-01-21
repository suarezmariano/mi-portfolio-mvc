const express = require("express");
const app = express();
const homeRoute = require("./routes/main.js")

app.listen(3000, () =>{
    console.log("Servidor funcionando");

});


app.use("/", homeRoute);