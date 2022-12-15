require('dotenv').config();
//require the library
const mongoose = require('mongoose');

// here we are using the MongoDB Url we defined in our ENV file
let DB_URL = process.env.DB_URL;

//connect to the database
mongoose.connect("mongodb+srv://sagar:dpBRE6DdDohuRKxP@cluster0.os7hqzm.mongodb.net/issue?retryWrites=true&w=majority" , 
  {
    usenewurlparser: true,
    useunifiedtopology: true
  }).then(()=>{
    console.log(`connection successful `);
  }).catch((err)=>{
    console.log(`error connecting to database` , err);
  })
 

