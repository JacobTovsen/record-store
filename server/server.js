const express = require( 'express' );
const bodyParser = require('body-parser');
const recordRouter = require('./routers/record.router');
// const Record = require('./modules/record.class');
// sent to router

const mongoose = require('mongoose');
const DATABASE_NAME = 'recordStore';
const DATABASE_URL = `mongodb://localhost:27017/${DATABASE_NAME}`
mongoose.connect(DATABASE_URL);

mongoose.connection.on('connected', ()=> {
    console.log( `Mongoose is connected to ${DATABASE_URL}`);
});

mongoose.connection.on('error', (error) => {
    console.log( `Mongoose connection error: ${error}`)
});

const app = express();
app.use( express.static( 'server/public' ));
app.use(bodyParser.urlencoded( {extended: true} ) );
app.use( bodyParser.json() );
app.use( '/record', recordRouter );


const port = process.env.PORT || 5000;
app.listen( port, () => console.log( `listening on port ${port}`));



//!!!!!!!sent all the following to router!!!!!!

//make some records
// const recordArray = [
//     new Record('Beatles', 'Abbey Road', 1969, ['rock', 'pop', 'yippie skippy']),
//     new Record('Michael Jackson', 'Off the Wall', 1979, ['Pop']),
//     new Record('Prince', 'Purple Rain', 1984, ['Pop']),
//     new Record('Cibo Matto', 'Via la Woman', 1990, ['Jpop'])
// ];

// app.get('/record', ( req, res ) => {
//     console.log('Handling my GET for /record');
//     res.send(recordArray);
// });

// app.post('/record', (req, res) => {
//     console.log('Handling my POST for /record', req.body);
//     let sentRecord = req.body;
//     //I could make 100% sure the objects are exactly the same on the client
//     // and server, or I could just assume they may not be and set all the values
//     // again.  Nice if you aren't the one writing the code on both sides.
//     let record = new Record(
//         sentRecord.artist,
//         sentRecord.album,
//         sentRecord.year,
//         [ sentRecord.genre ]
//     );
//     recordArray.push(record);
//     res.sendStatus(201);
//     // status 201 = 'created'
// })


