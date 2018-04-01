var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var db = mongoose.connection;
mongoose.connect(process.env.DB);

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var reviewSchema = new Schema
(
    {
        movieTitle:
            {
                type: String
            },
        reviewer:
            {
                type: String
            },
        rating:
            {
                type: Number,
                min: 1,
                max: 5
            },
        quote:
            {
                type: String

            }

    }
);

module.exports = mongoose.model('reviews', reviewSchema);