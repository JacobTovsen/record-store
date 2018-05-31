const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recordSchema = new Schema(
    {
        artist: { type: String, required: true},
        album: { type: String, required: true},
        year: { type: String },
        genre: { type: [ String ] }
    }
);

module.exports = mongoose.model('record', recordSchema);