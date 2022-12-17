import Star from "../icons/Star";
import Bookmark from "../icons/Bookmark";
import Bookmarked from "../icons/Bookmarked";
import { Link } from "react-router-dom";
import { useEffect, useReducer, useState } from "react";

const API_BASE = "http://localhost:3001";

export default function Movie({id, poster, title, year, rating, watchlist}) {
    // const [reducerValue, forceUpdate] = useReducer(x => x+1, 0);    

    const [wl, setWl] = useState(watchlist);

    function addtoWatchlist() {
        fetch(API_BASE + "/movie/addToWatchlist/" + id)
            .then(res => res.json());
        
        setWl(wl => !wl)
        // forceUpdate();
    }

    return(
        <div className="movie">
            <Link to={"/movie/" + id} style={{textDecoration: 'none'}}>
                <div className="moviePortrait">
                    <img src={poster} alt={title} />
                </div>
            </Link>
            <div className="glassy">
                <div className="leftText">
                    <div className="rating">
                        <div className="star"><Star/></div>
                        <div className="ratVal">{rating} / 10</div>
                    </div>
                    <div className="movieTitle">{title} ({year})</div>
                </div>
                
                <div className="addWatchList" 
                onClick={addtoWatchlist} >
                    {watchlist ? <Bookmarked/> : <Bookmark/>}
                </div>
            </div>
        </div>
    );
}
