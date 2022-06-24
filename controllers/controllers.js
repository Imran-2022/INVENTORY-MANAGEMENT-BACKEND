const { DATACOLLECTION } = require('../models/connect.database')

// product count

const productCounts = async (req, res) => {
    const count = await DATACOLLECTION.countDocuments();
    res.send({ count })
}

// all products 

const products = async (req, res) => {
    const result = await DATACOLLECTION.find({}).toArray();
    res.send(result)
}

// add products

const addProducts = async (req, res) => {
    const result = await DATACOLLECTION.insertOne(req.body)
    res.status(200).json(result)
}

module.exports = {
    productCounts,
    products,
    addProducts,
}
