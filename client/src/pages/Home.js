// import Movie from "../components/Movie";
import FanFavorites from "../components/FanFavorites";  
import MainSlider from "../components/mainSlider";
import TopPicks from "../components/TopPicks";
import InTheaters from "../components/InTheaters";
import Watchlist from "../components/Watchlist";

export default function Home() {
    return(
        <>
            <MainSlider/>
            <div className="wrapper">
                <h1 className="sessionTitle">What to Watch</h1>
                <TopPicks />
                <FanFavorites />
                <h1 className="sessionTitle">Explore Movies & TV Shows</h1>
                <InTheaters/>
                <Watchlist/>
            </div>
        </>
    );
}