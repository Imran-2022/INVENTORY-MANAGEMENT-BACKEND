const ObjectId = require('mongodb').ObjectId;
const { MongoClient, ServerApiVersion } = require('mongodb');

const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${db_user}:${db_pass}@cluster0.tubwp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const dataCollection = client.db("assignment11").collection("assignment11-data");

module.exports = {
    DATABASE: client,
    DATACOLLECTION: dataCollection,
}
