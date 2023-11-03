const express = require('express');
const { connection } = require('./db');
var cors = require('cors');
const { json } = require('body-parser');
const { userRouter } = require('./Route/user.route');
const { sellerRoutes } = require('./Route/seller.route');
const { dataRoutes } = require('./Route/data.route');
require('dotenv').config();
const app = express();


app.use(cors());
app.use(express.json());
app.use('/user',userRouter);
app.use('/seller',sellerRoutes);
app.use('/data',dataRoutes);

app.listen(process.env.PORT,async()=>{
    try {
        await connection;
        console.log('Connected to db');
        console.log('server running at port no 4500');
    } catch (error) {
        console.log(`Something went to Wrong`);
        console.log(error);
    }
})