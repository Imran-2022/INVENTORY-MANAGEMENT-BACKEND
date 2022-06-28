const { DATACOLLECTION } = require('../models/connect.database')
const ObjectId = require('mongodb').ObjectId;
// product count

const productCounts = async (req, res) => {
    const count = await DATACOLLECTION.countDocuments();
    res.send({ count })
}

// all products 

const products = async (req, res) => {
    if (req.query.email) {
        const dt = req.query.email;
        const result = await DATACOLLECTION.find({supplierEmail:dt}).toArray();
        res.send(result)
    }
    else{
        const result = await DATACOLLECTION.find({}).toArray();
        res.send(result)
    }

}


// delete all
const productsD = async (req, res) => {
    const result = await DATACOLLECTION.deleteMany({});
    res.send(result)
}

// add products

const addProducts = async (req, res) => {
    const result = await DATACOLLECTION.insertOne(req.body)
    res.status(200).json(result)
}

// deleteSingleData

const deleteSingleData = async (req, res) => {
    const result = await DATACOLLECTION.deleteOne({ _id: ObjectId(req.params.id) });
    res.send(result)
}

//  get single Data 
const getSingleData = async (req, res) => {
    const result = await DATACOLLECTION.find({ _id: ObjectId(req.params.id) }).toArray();
    res.status(200).json(result)
}

// updateSingleStock

const updateSingleStock = async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const filter = { _id: ObjectId(id) };
    const options = { upsert: true };
    const updateQuantity = {
        $set: {
            quantity: data.newQuantity,
        },
    };
    const result = await DATACOLLECTION.updateOne(
        filter,
        updateQuantity,
        options
    );
    res.send(result);
}

module.exports = {
    productCounts,
    products,
    addProducts,
    productsD,
    deleteSingleData,
    getSingleData,
    updateSingleStock
}
