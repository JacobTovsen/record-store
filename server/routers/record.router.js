const express = require('express');
const Record = require('../modules/models/record.schema.js');
//Have express make me a new Router

const router = express.Router();
// const Record = require('../modules/record.class');
const recordArray = [];

router.get('/', ( req, res ) => {
    console.log('Handling my GET for /record');
    res.send(recordArray);
});

router.post('/', (req, res) => {
    console.log('Handling my POST for /record', req.body);
    let sentRecord = req.body;
    sentRecord.genre = [sentRecord.genre];
    //I could make 100% sure the objects are exactly the same on the client
    // and server, or I could just assume they may not be and set all the values
    // again.  Nice if you aren't the one writing the code on both sides.
    let record = new Record(sentRecord);
    recordArray.push(record);
    res.sendStatus(201);
    // status 201 = 'created'
})

module.exports = router;