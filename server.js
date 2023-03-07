// require('dotenv').config();
// const cors = require('cors');

// const { MongoClient, ServerApiVersion } = require('mongodb');
import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';
import authRoute from './routes/authRoute.js'

//configure env
dotenv.config();

//rest object
const app = express()

//routes 
app.use("/api/v1/auth", authRoute)

//rest api

app.get('/', (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>")
})

//port 

const PORT = process.env.PORT || 8080;
app.use(cors())

//giftshopdb
//wz20aAMFj9F9Se3P


// const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.uvyemjj.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
console.log(uri);

// run  listen
app.listen(PORT, () => {
    console.log(`server running on ${process.env.DEV_MODE} mode on ${PORT}`.bgCyan.white);
})
