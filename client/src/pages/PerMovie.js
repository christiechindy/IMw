import React from 'react'
import Starr from '../icons/Starr'
import TimeIcon from '../icons/TimeIcon'
import PlayIcon from '../icons/PlayIcon'
import BookMarkSimple from '../icons/BookMarkSimple'
import ReportIcon from '../icons/ReportIcon'
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';
import { useParams } from "react-router-dom";
import Bookmarked from '../icons/Bookmarked'

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const API_BASE = "http://localhost:3001";

export default function PerMovie() {
    const {id} = useParams();

    const [moviee, setMoviee] = useState({});
    const [wl, setWl] = useState(moviee.watchlist);

    useEffect(() => {
        GetMoviee();
        console.log(moviee);
    }, [wl])

    const GetMoviee = () => {
        fetch(API_BASE + "/movie/" + id)
            .then(res => res.json())
            .then(data => setMoviee(data))
            .catch(err => console.error("Error: ", err));
    }

    const locationn = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [locationn]);


    function addtoWatchlist() {
        fetch(API_BASE + "/movie/addToWatchlist/" + id)
            .then(res => res.json());
        
        setWl(wl => !wl)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)};
    const handleShow = () => setShow(true);

    const navigate = useNavigate();
    const handleSend = () => {
        deleteMovie();
        alert("The Movie has been deleted");
        setShow(false);
        navigate(-1);
    }

    function deleteMovie() {
        fetch(API_BASE + "/movie/delete/" + id, {method: "DELETE"})
            .then(res => res.json());
    }

    return (
        <>
            <div className="perMovie">
                <div className="smoothSurrounding"></div>
                <div className="landscapeCover"><img src={moviee.landscapeImg} alt={moviee.title} /></div>
                <div className="moviePoster"><img src={moviee.portraitImg} alt={moviee.title} /></div>
                <div className="wrapper">
                    <div className="movieDescription">
                        <div className="movieTitle">{moviee.title} ({moviee.year})</div>
                        <div className="iconsDescription">
                            <div className="ratingDesc">
                                <Starr/>
                                <div className="ratVal">{moviee.rating}/10</div>
                            </div>
                            <div className="durationDesc">
                                <div className="timeIconCont"><TimeIcon/></div>
                                <div className="durVal">{moviee.duration}</div>
                            </div>
                            <div className="tagars">
                                {moviee.genres && moviee.genres.map(genre => 
                                    <div className="tagar" key={genre}>{genre}</div>    
                                )}
                            </div>
                        </div>
                        <div className="movieSynopsis">{moviee.synopsis}</div>
                        <div className="movieAuthors">
                            <span>Authors: </span>
                            {moviee.authors}
                        </div>
                        <div className="actionBtns">
                            <a className="trailerBtn" href={moviee.trailerLink} target="_blank">
                                <div className="icon"><PlayIcon /></div>
                                <span>Watch Trailer</span>
                            </a>
                            <div className="watchlistBtn" onClick={addtoWatchlist}>
                                {moviee.watchlist ? 
                                    <>
                                        <div className="icon"><Bookmarked fll="#ffffff"/></div>
                                        <span>Added to Watchlist</span>
                                    </> : 
                                    <>
                                        <div className="icon"><BookMarkSimple /></div>
                                        <span>Save to Watchlist</span>
                                    </>
                                }
                            </div>
                            <div className="reportBtn" onClick={handleShow}>
                                <div className="icon"><ReportIcon /></div>
                                <span>Delete Movie</span>
                            </div>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header closeButton>
                                    <Modal.Title>Report Movie</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                    Why do you want to report the movie? <div style={{height: "6px"}}></div>
                                    <input type="radio" name="rep" id="sex" checked />
                                    <label htmlFor="sex">Sexual Content</label>
                                    <br/>
                                    <input type="radio" name="rep" id="violent" />
                                    <label htmlFor="violent">Violent or repulsive content</label>
                                    <br/>
                                    <input type="radio" name="rep" id="hate" />
                                    <label htmlFor="hate">Hateful or abusive content</label>
                                    <br/>
                                    <input type="radio" name="rep" id="bully" />
                                    <label htmlFor="bully">Harassment or bullying</label>
                                    <br/>
                                    <input type="radio" name="rep" id="harm" />
                                    <label htmlFor="harm">Harmful or dangerous acts</label>
                                    <br/>
                                    <input type="radio" name="rep" id="childab" />
                                    <label htmlFor="childab">Child abuse</label>
                                    <br/>
                                    <input type="radio" name="rep" id="terror" />
                                    <label htmlFor="terror">Terrorism</label>
                                    <br/>
                                </Modal.Body>
                                <Modal.Footer>
                                    <Button variant="secondary" onClick={handleClose}>
                                        Cancel
                                    </Button>
                                    <Button variant="primary" onClick={handleSend}>
                                        Send
                                    </Button>
                                </Modal.Footer>
                            </Modal>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* --------------PhotosGallery------------- */}
            <div className="wrapper ph">
                <h2 className="subsesTitle prmv">Photos</h2>
                <div className="singleRowMovie photosGallery">
                    {moviee.photos && moviee.photos.map(photo => 
                        (<img src={photo} alt={moviee.title}/>)
                    )}
                </div>
            </div>

            {/* --------------TopCasts-------------- */}
            <div className="wrapper">
                <h2 className="subsesTitle prmv">Top Casts</h2>
                <div className="topCastsCont">
                    {moviee.topCasts && moviee.topCasts.map(person =>
                        <div className="person">
                            <div className="face">
                                <img src={person.face} alt={person.namaAsli} />
                            </div>
                            <div className="names">
                                <div className="namaAsli">{person.namaAsli}</div>
                                <div className="namaDiFilm">{person.namaDiFilm}</div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
