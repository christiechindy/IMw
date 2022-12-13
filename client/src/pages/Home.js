import FanFavorites from "../components/FanFavorites";  
import MainSlider from "../components/mainSlider";
import TopPicks from "../components/TopPicks";
import InTheaters from "../components/InTheaters";
import RecentlyViewed from "../components/RecentlyViewed";

export default function Home() {
    return(
        <>
        <div className="wrapper">
        <MainSlider/>
        <h1 className="sessionTitle">What to Watch</h1>
        <TopPicks />
        <FanFavorites />
        <h1 className="sessionTitle">Explore Movies & TV Shows</h1>
        <InTheaters/>
        <RecentlyViewed/>
        </div>
            
        </>
    );
}