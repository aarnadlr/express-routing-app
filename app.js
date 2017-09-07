// EXPRESS ROUTING

// 1. SETUP / REQUIRES
var express = require("express");
var app = express();


// 2. ROUTES
app.get("/", function(req, res) {
  console.log("Someone made a REQUEST to /ROOT!!");
  res.send("Hi there, welcome to my assignment.");
});


////

// app.get("/speak/pig", function(req, res) {
//   console.log("Someone made a REQUEST to /SPEAK/PIG!!");
//   var animal = "pig";
//   res.send("The "+animal+" says 'Oink!'");
// })

// app.get("/speak/cow", function(req, res) {
//   console.log("Someone made a REQUEST to /SPEAK/COW!!");
//   var animal = "cow";
//   res.send("The "+animal+" says 'Moo!'");
// })

// app.get("/speak/dog", function(req, res) {
//   console.log("Someone made a REQUEST to /SPEAK/DOG!!");
//   var animal = "dog";
//   res.send("The "+animal+" says 'Woof Woof!'");
// })

// LOOPED VERSION

app.get("/speak/:animal", function(req,res) {
  var animal = req.params.animal.toLowerCase();
  var sounds = {
    pig : "Oink",
    cow : "Moo",
    fish : "Blurb",
    horse : "Neeigh!!"
  }
  var sound = sounds[animal];

// if (animal === 'pig') {
//   sound = "OOIINNKK";
// }

// if (animal === 'cow') {
//   sound = "MMMOOOUUU";
// }

// if (animal === 'dog') {
//   sound = "WWWOOOUUUFFF";
// }

  res.send('The '+animal+ ' says "'+sound+'"');
})



////
////


app.get("/repeat/:word/:num", function(req, res) {
  console.log("33333");
  var word = req.params.word;
  var num = Number(req.params.num);
  var result = "";

  for (var i = 0; i < num; i++) {
    result += word+" ";  //places word into result string
  }

  res.send(   result    );
  // res.send("Word: "+ word + " Num: "+ num);
  // res.send(word * num);

})








//////////

app.get("*", function(req, res) {
  console.log("Someone made a REQUEST to an UNDEFINED route!!");
  res.send("Sorry, page not found...What are you doing with your life?");
})


// Tell Express to LISTEN for requests (start server)

app.listen(3000, function(){
  console.log("SERVER HAS STARTED!");
});