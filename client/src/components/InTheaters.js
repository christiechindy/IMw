import Movie from "./Movie";

export default function inTheaters(){
    return(
        <div className="inTheaters">
            <h2 className="subsesTitle">In theaters</h2>
            <div className="descriptions">
                <p>Are available to watch on Cinema XXI</p>
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