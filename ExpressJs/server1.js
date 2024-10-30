const express = require("express")

// Creates an express application. The express function is a top level function
// which is exported by express module
const app = express();

app.listen(3000, function(){
    console.log("Server Restarted but with nodemon - from console log.");
});

app.get("/", function(request, response){
    // console.log(request);
    // response.send("Connected");

    response.send("<h1>Welcome to PrepInsta</h1>");
});

app.get("/contact", function(req, res){
    res.send("<p>Please call us at <a href='tel:123-456-7890'>123-456-7890</a></p>");
});

app.get("/home", function(req, res){
    res.send("<h1>This is our lovely homePage</h1>");
});

app.get("/about", function(req, res){
    res.send("<p>PrepInsta is an amazing website, source : Trust me bro ;) !!!</p>");
});