import Movie from "./Movie";

export default function recentlyViewed(){
    return(
        <div className="recentlyViewed">
            <div className="viewed">
                <h2 className="subsesTitle">Recently Viewed</h2>
                <p>clear</p>
            </div>
            <div className="singleRowMovie">
                <Movie/>
            </div>
        </div>
        

    );
}