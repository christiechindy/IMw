import Movie from "./Movie";

export default function fanFavorites(){
    return(
        <div className="fanFavorites">
            <h2 className="subsesTitle">Fan Favorites</h2>
            <div className="descriptions">
                <p>High rating and trending movies</p>
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