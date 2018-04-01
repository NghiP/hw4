var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;
mongoose.connect(process.env.DB);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var movieSchema = new Schema
(
    {
        title:
            {
                type: String
            },
        yearReleased:
            {
                type: Number
            },
        genre:
            {
                type: String,
                enum: ["action", "adventure", "comedy", "drama", "fantasy", "horror", "mystery", "thriller", "western"],

            },
        actors:
             {
                type: Array
            }
    }
);

module.exports = mongoose.model('movies', movieSchema);