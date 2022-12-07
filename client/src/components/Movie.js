import Star from "../icons/Star";
import theMenu from "../images/theMenu.png";
import Bookmark from "../icons/Bookmark";

export default function Movie() {
    return(
        <div className="wrapper">
            <div className="movie">
                <div className="moviePortrait">
                    <img src={theMenu} alt="the Menu" />
                </div>
                <div className="glassy">
                    <div className="leftText">
                        <div className="rating">
                            <div className="star"><Star/></div>
                            <div className="ratVal">7.2</div>
                        </div>
                        <div className="movieTitle">the Menu</div>
                    </div>
                    <div className="addWatchList"><Bookmark/></div>
                </div>
            </div>
        </div>
    );
}