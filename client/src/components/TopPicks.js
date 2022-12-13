import Movie from "./Movie";

export default function topPicks(){
    return(
        <div className="topPicks">
            <h2 className="subsesTitle">Top Picks</h2>
            <div className="descriptions">
                <p>Specially chosen by Top Editors</p>
                <p>See all</p>
            </div>
            <div className="singleRowMovie">
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
            </div>
        </div>
        

    );
}