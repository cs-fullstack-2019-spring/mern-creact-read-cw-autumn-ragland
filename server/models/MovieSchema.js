var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//movie model
var MovieSchema = new Schema({
    movieName: String,
    genre: String,
    cast: {
            mainActor: String,
            mainActress: String,
            supportingActor: String,
            supportingActress: String,
        },
});

module.exports = mongoose.model('Movie', MovieSchema );
