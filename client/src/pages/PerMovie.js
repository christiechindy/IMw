import React from 'react'
import Starr from '../icons/Starr'
import TimeIcon from '../icons/TimeIcon'
import PlayIcon from '../icons/PlayIcon'
import BookMarkSimple from '../icons/BookMarkSimple'
import CommentsLicon from '../icons/CommentsLicon'
import CommentsRicon from '../icons/CommentsRicon'
import UserIcon from '../icons/UserIcon'
import JempolKosong from '../icons/JempolKosong'
import JempolPenuh from '../icons/JempolPenuh'

export default function PerMovie() {
    //movies nti yg mau di map
    //satuannya itu movie
    const Movie = {
        title: "Harry Potter and the Cursed Child",
        year: 2016,
        rating: 8.5,
        genres: ["family", "action", "fantasy"],
        duration: 124,
        synopsis: "Harry Potter and the Cursed Child is about the journey Albus takes while growing up, and the roles he and his best friend, Scorpius (Draco Malfoy's son), play when dark forces, perhaps in league with Voldemort, once again threaten the fate of the planet.",
        authors: "J K Rowling, Jack Thorne, John Tiffany",
        trailerLink: "https://youtu.be/KzD3qlnhVZA",
        portraitImg: "https://images.ctfassets.net/usf1vwtuqyxm/3y9dEN52J2hWkpJLOxQv1W/1c42454b136ad6757b2f2ae4d3de96e5/TT_2021_OnSaleAssets_750x1050-1-.png?w=914&q=70&fm=jpg",
        landscapeImg: "https://ca-times.brightspotcdn.com/dims4/default/523c0e5/2147483647/strip/true/crop/5775x3850+491+0/resize/2400x1600!/quality/80/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2F25%2F81%2F36b9105d41b596ce65457481030d%2Fhpatcc-sf-2646-photo-by-evan-zimmerman-for-murphymade.jpg",
        photos: ["https://i2.wp.com/www.palacetheatrelondon.org/wp-content/uploads/2015/06/harry-potter-play-cursed-child.jpg?resize=620%2C399&ssl=1", "https://media.timeout.com/images/105271210/750/422/image.jpg", "https://res.klook.com/images/fl_lossy.progressive,q_65/c_fill,w_1110,h_739/w_68,x_12,y_12,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/afw0y2ebtjmvsws79ien/TiketHarryPotterandtheCursedChildBroadwayShowdiNewYork.webp", "https://media.wired.com/photos/5926d307af95806129f50bfa/master/pass/HarryPotterIL.jpg"],
        topCasts: [
            {
                "face": "https://media1.popsugar-assets.com/files/thumbor/HwtAUAufmAZv-FgGEIMJS2eQM-A/0x1:2771x2772/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2020/03/30/878/n/1922398/eb11f12e5e825104ca01c1.02079643_/i/Robert-Downey-Jr.jpg",
                "namaAsli": "Robert Downey JR",
                "namaDiFilm": "Tony Stark, Iron Man"
            },
            {
                "face": "https://img.celebrities.id/okz/900/u2ui77/master_40mSrz6Q08_1902_fakta_menarik_chris_evans.jpg",
                "namaAsli": "Chris Evans",
                "namaDiFilm": "Steve Rogers, Captain America"
            },
            {
                "face": "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Mark_Ruffalo_in_2017_by_Gage_Skidmore.jpg/800px-Mark_Ruffalo_in_2017_by_Gage_Skidmore.jpg",
                "namaAsli": "Mark Ruffalo",
                "namaDiFilm": "Bruce Banner, Hulk"
            },
            {
                "face": "https://cdn.britannica.com/92/215392-050-96A4BC1D/Australian-actor-Chris-Hemsworth-2019.jpg",
                "namaAsli": "Chris Hemsworth",
                "namaDiFilm": "Thor"
            },
            {
                "face": "https://upload.wikimedia.org/wikipedia/commons/5/57/Scarlett_Johansson_by_Gage_Skidmore_2_%28cropped%29_%28cropped%29.jpg",
                "namaAsli": "Scarlett Johansson",
                "namaDiFilm": "Natasha Romanoff, Black Widow"
            }    
        ],
        comments: [
            {
                whoComment: "Larissa Rochefort",
                hisComment: "To me, Cursed Child is nothing short of extremely badly written Fanfiction. No joke, I literally read hundreds of fanfictions dealing with events after DH that were way better then CC.",
                liked: true
            },
            {
                whoComment: "Larissa Rochefort",
                hisComment: "To me, Cursed Child is nothing short of extremely badly written Fanfiction. No joke, I literally read hundreds of fanfictions dealing with events after DH that were way better then CC.",
                liked: false
            }
        ]
    }

    return (
        <>
            <div className="perMovie">
                <div className="smoothSurrounding"></div>
                <div className="landscapeCover"><img src={Movie.landscapeImg} alt={Movie.title} /></div>
                <div className="moviePoster"><img src={Movie.portraitImg} alt={Movie.title} /></div>
                <div className="wrapper">
                    <div className="movieDescription">
                        <div className="movieTitle">{Movie.title} ({Movie.year})</div>
                        <div className="iconsDescription">
                            <div className="ratingDesc">
                                <Starr/>
                                <div className="ratVal">{Movie.rating}</div>
                            </div>
                            <div className="durationDesc">
                                <div className="timeIconCont"><TimeIcon/></div>
                                <div className="durVal">{Movie.duration}</div>
                            </div>
                            <div className="tagars">
                                {Movie.genres.map(genre => 
                                    <div className="tagar" key={genre}>{genre}</div>    
                                )}
                            </div>
                        </div>
                        <div className="movieSynopsis">{Movie.synopsis}</div>
                        <div className="movieAuthors">
                            <span>Authors: </span>
                            {Movie.authors}
                        </div>
                        <div className="actionBtns">
                            <div className="trailerBtn">
                                <div className="icon"><PlayIcon /></div>
                                <span>Watch Trailer</span>
                            </div>
                            <div className="watchlistBtn">
                                <div className="icon"><BookMarkSimple /></div>
                                <span>Save to Watchlist</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* --------------PhotosGallery------------- */}
            <div className="wrapper ph">
                <h2 className="subsesTitle prmv">Photos</h2>
                <div className="nextShadow"></div>
                <div className="singleRowMovie photosGallery">
                    {Movie.photos.map(photo => 
                        <img src={photo} alt={Movie.title}/>
                    )}
                </div>
            </div>

            {/* --------------TopCasts-------------- */}
            <div className="wrapper">
                <h2 className="subsesTitle prmv">Top Casts</h2>
                <div className="topCastsCont">
                    {Movie.topCasts.map(person =>
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

            {/* --------------ReviewsSection-------------- */}
            <div className="wrapper reviewsSection">
                <div className="left_others">
                    <div className="sectionTitle">
                        <div className="iconCont"><CommentsLicon /></div>
                        <span>People's Reviews</span>
                    </div>

                    <div className="commentsCont">
                        {Movie.comments.map(comment =>
                            <div className="comment">
                                <div className="topRow">
                                    <div className="left">
                                        <UserIcon />
                                        <span>{comment.whoComment}</span>
                                    </div>
                                    {comment.liked ? <JempolPenuh /> : <JempolKosong />}
                                </div>
                                <div className="hisComment">{comment.hisComment}</div>
                            </div>
                        )}
                    </div>
                </div>

                <div className="right_you">
                    <div className="sectionTitle">
                        <div className="iconCont"><CommentsRicon /></div>
                        <span>Write your Review</span>
                    </div>

                    <textarea name="opinion" id="yourOpinion" placeholder="We would like to know your thoughts..."></textarea>

                    <textarea name="namaPena" id="namaPena" placeholder='Publish as?'></textarea>

                    <div className="publishBtn">Publish</div>
                </div>
            </div>
        </>
    )
}
