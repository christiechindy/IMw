import Star from "../icons/Star";
import Bookmark from "../icons/Bookmark";

export default function Movie({poster, title, year, rating}) {
    return(
        <div className="movie">
            <div className="moviePortrait">
                <img src={poster} alt={title} />
            </div>
            <div className="glassy">
                <div className="leftText">
                    <div className="rating">
                        <div className="star"><Star/></div>
                        <div className="ratVal">{rating} / 10</div>
                    </div>
                    <div className="movieTitle">{title} ({year})</div>
                </div>
                <div className="addWatchList"><Bookmark/></div>
            </div>
        </div>
    );
}
