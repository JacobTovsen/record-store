const express = require('express');
const Record = require('../modules/models/record.schema.js');
//Have express make me a new Router

const router = express.Router();
// const Record = require('../modules/record.class');
const recordArray = [];

router.get('/', ( req, res ) => {
    Record.find()
        .then( ( data ) => {
            //we got stuff back from the database (noerror)
            console.log(`Got stuff back from mongo: ${data}`);
            res.send(data);
        }).catch( (error) => {
            // got an error from database
            console.log(`Error from mongo: ${error}`);
            res.sendStatus(500); // status for bad stuf returned
        });
});

router.post('/', (req, res) => {
    let recordData = req.body;
    console.log('got the record data from request:', recordData );
    let newRecord = new Record(recordData);
    newRecord.save()
    .then(() =>{
        res.sendStatus(201);
    }).catch((error) => {
        console.log('error adding record:', error );
        res.sendStatus(500);
    })
})

module.exports = router;