const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51HqVm6CpEi2RT5Cc1fr3pjiu2P7fNgmTEZiVdmdKy7OCxrntVtn29GL0lWK238LQ8jx7a9CWD2iETpxwwXW01B0s00C6ceNxA9');

// We are setting up the API

// app config
const app = express();


// MiddleWares
app.use(cors({origin:true}));
app.use(epxress.json());



//API routes

app.get('/', (request, response) => response.status(200).send('hello world'))


//Listen command
exports.api = functions.https.onRequest(app)



// npm i express
//  npm install cors
// npm i stripe



// at the end you place ( firebase emulators:start)