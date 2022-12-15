const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

//mongodb+srv://imw-6:<password>@cluster0.r32d2k1.mongodb.net/?retryWrites=true&w=majority
//database name: imwDB
//collection name: movies

const uri = "mongodb+srv://imw-6:IMw_Klp6_PW_KlsC@cluster0.r32d2k1.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect(uri , {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'imwDB'
})
.then(() => console.log("connected to DB"))
.catch(console.error);

//utk start: npm start

const Movie = require('./models/MovieSch');

app.get('/movies', async(req, res) => {
    const movies = await Movie.find();

    res.json(movies);
})

app.post('/movie/new', async(req, res) => {
    const movie = new Movie({
        title: req.body.title,
        year: req.body.year,
        rating: req.body.rating,
        topPicks : req.body.topPicks,
        fanFav : req.body.fanFav,
        inTheaters : req.body.inTheaters,
        watchlist : req.body.watchlist,
        genres : req.body.genres,
        duration : req.body.duration,
        synopsis : req.body.synopsis,
        authors : req.body.authors,
        trailerLink : req.body.trailerLink,
        portraitImg : req.body.portraitImg,
        landscapeImg : req.body.landscapeImg,
        photos : req.body.photos,
        topCasts : req.body.topCasts,
        comments : req.body.comments
    });

    movie.save();

    res.json(movie);
})

app.delete('/movie/delete/:id', async(req, res) => {
    const result = await Movie.findByIdAndDelete(req.params.id);

    res.json(result);
})

//push comment
app.get('/movie/comment/:id', async(req, res) => {
    const movie = await Movie.findOneAndUpdate(req.params.id);

    var objj = {
        whoComment: "kauu",
        hisComment: "testesji"
    }
    movie.comments.push(objj)

    movie.save();
    res.json(movie);
})

app.listen(3001, () => console.log("server started on port 3001"));