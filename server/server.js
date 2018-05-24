const express = require( 'express' );
const bodyParser = require('body-parser');
const Record = require('./modules/record.class');

const app = express();
app.use( express.static( 'server/public' ));
app.use(bodyParser.urlencoded( {extended: true} ) );

//make some records
const recordArray = [
    new Record('Beatles', 'Abbey Road', 1969, ['rock']),
    new Record('Michael Jackson', 'Off the Wall', 1979, ['Pop']),
    new Record('Prince', 'Purple Rain', 1984, ['Pop']),
    new Record('Cibo Matto', 'Via la Woman', 1990, ['Jpop'])
];

app.get('/record', ( req, res ) => {
    console.log('Handling my GET for /record');
    res.send(recordArray);
})

const port = 5000;
app.listen( port, () => console.log( `listening on port ${port}`));


