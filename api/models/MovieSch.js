const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const topCastsSchema = new Schema({
    face: String,
    namaAsli: String,
    namaDiFilm: String
})

const commentSchema = new Schema({
    whoComment: String,
    hisComment: String,
    liked: {
        type: Boolean,
        default: false
    }
})

const movieSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    topPicks: {
        type: Boolean,
        default: false
    },
    fanFav: {
        type: Boolean,
        default: false
    },
    inTheaters: {
        type: Boolean,
        default: false
    },
    watchlist: {
        type: Boolean,
        default: false
    },
    genres: [String],
    duration: {
        type: Number,
        required: true
    },
    synopsis: {
        type: String,
        required: true
    },
    authors: {
        type: String,
        required: true
    },
    trailerLink: {
        type: String,
        required: true
    },
    portraitImg: {
        type: String,
        required: true
    },
    landscapeImg: {
        type: String,
        required: true
    },
    photos: [String],
    topCasts: [topCastsSchema],
    comments: [commentSchema]
}, {collection: 'movies'});


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;