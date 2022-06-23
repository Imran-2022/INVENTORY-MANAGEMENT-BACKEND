const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const cors = require('cors');
const ObjectId = require('mongodb').ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');
require('dotenv').config()
app.use(express.json())
app.use(cors())
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${db_user}:${db_pass}@cluster0.tubwp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
    try {
        await client.connect();
        console.log("mongodb connected")
        const dataCollection = client.db("assignment11").collection("assignment11-data");


        //   post 
        app.post("/products", async (req, res) => {
            const result = await dataCollection.insertOne(req.body)
            res.send(result)
        })


        // count total data available 
        app.get('/productCount', async (req, res) => {
            const count = await dataCollection.countDocuments();
            res.send({ count })
        })


        // home route
        app.get('/', async(req, res) => {
            await res.sendFile(__dirname+"/view/homeRoute.html");
        })

    } finally {
        //   await client.close();
    }
}
run().catch(console.dir);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
