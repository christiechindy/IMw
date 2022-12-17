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

//find all movies
app.get('/movies', async(req, res) => {
    const movies = await Movie.find();

    res.json(movies);
    console.log("ambil movie dari dtabase")
})

//find topPicks movies
app.get('/movies/topPicks', async(req, res) => {
    const topPicksM = await Movie.find({"topPicks" : true});

    res.json(topPicksM);
})

//find fanFav movies
app.get('/movies/fanFav', async(req, res) => {
    const fanFavM = await Movie.find({"fanFav": true});

    res.json(fanFavM);
})

//find inTheaters movies
app.get('/movies/inTheaters', async(req, res) => {
    const inTheaters = await Movie.find({"inTheaters": true});

    res.json(inTheaters);
})

//find watchlist movies
app.get('/movies/watchlist', async(req, res) => {
    const watchlist = await Movie.find({"watchlist": true});

    res.json(watchlist);
})

//find cathegorical movies
app.get('/movies/:genress', async(req, res) => {
    const movies = await Movie.find({"genres": req.params.genress});

    res.json(movies);
})

//create movie
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

//delete movie
app.delete('/movie/delete/:id', async(req, res) => {
    const result = await Movie.findByIdAndDelete(req.params.id);

    res.json(result);
})

//find specific movie
app.get('/movie/:id', async(req, res) => {
    const movie = await Movie.findById(req.params.id);

    res.json(movie);
})

//add to watchlist
app.get('/movie/addToWatchlist/:id', async(req, res) => {
    const movie = await Movie.findById(req.params.id);

    movie.watchlist = !movie.watchlist;
    movie.save();

    res.json(movie);
})

//like comment 
// app.get('/movie/:movieId/like/:commentId', async(req, res) => {
//     const movie = await Movie.findById(req.params.movieId);
//     const comment = await movie.comments.findById(req.params.commentId);

//     comment.liked = !comment.liked;

//     comment.save();
//     movie.save();

//     res.json(movie);
// })


//push comment
app.get('/movie/comment/:id', async(req, res) => {
    const movie = await Movie.findByIdAndUpdate(req.params.id);

    var objj = {
        whoComment: "Penggemar Doraemon",
        hisComment: "Growing up watching tons of Doraemon, I feel obliged to see this like a ritual. While the technical aspects excels incredibly, I feel the script is too sensational. Never in my life have we cried for a Doraemon episode, but this predictable story makes everyone sob. On the whole, I cannot say I do not like it. But I cannot say I like it either. It seems it is made with a lot of sincerity and uplifting for kids who are a little insecure about themselves. But I think it is unnecessarily tear-jerking, as in the director's previous work The Eternal Zero. Just a little overly sensational. I cried a few times and I think it is the style of the director who likes to make you cry. But I think he could have achieved the same result without jerking audience's tears."
    }
    movie.comments.push(objj)

    movie.save();
    res.json(movie);
})

app.listen(3001, () => console.log("server started on port 3001"));