import LogoIcon  from "../icons/LogoIcon";
import SearchIcon from "../icons/SearchIcon";

export default function Header() {
    return(
        <header className="page-header">
            <div className="wrapper">
                <div className="logo">
                    <LogoIcon/>
                    <div className="text">IMw</div>
                </div>
                <div className="menu">Menu</div>
                <div className="searchBar">
                    <SearchIcon/>
                    <span className="line"></span>
                    <input type="text" id="search" placeholder="Search movie..."/>
                </div>
                <div className="watchList">Watchlist</div>
                <div className="login">Login</div>
            </div>
        </header>
    );
}
