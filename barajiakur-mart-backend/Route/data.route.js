const express = require('express');
const { auth } = require('../Middleware/data.protecter');
const { DataModel } = require('../Model/data.model');

const dataRoutes = express.Router();

dataRoutes.use(auth);

dataRoutes.get(`/`, async (req, res) => {
    try {
        const data = await DataModel.find();
        res.status(200).json({ data: data });
    } catch (error) {
        res.status(400).json({ msg: 'something went to wrong' })
    }
})


dataRoutes.post(`/add`,async (req,res)=>{
    try {
        const newData = new DataModel(req.body);
        newData.save();
        res.status(200).json({msg : `new data is added`});
    } catch (error) {
        res.status(400).json({ msg: 'something went to wrong' })
    }
})

dataRoutes.get('/mydata',async (req,res)=>{
    try {
        const data = await DataModel.find(req.body.userId);
        res.status(200).json({data});
    } catch (error) {
        res.status(400).json({ msg: 'something went to wrong' })
    }
})

module.exports = { dataRoutes };