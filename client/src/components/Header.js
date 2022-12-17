import LogoIcon  from "../icons/LogoIcon";
import SearchIcon from "../icons/SearchIcon";
import { Link } from "react-router-dom";
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

export default function Header() {
    return(
        <header className="page-header">
            <div className="wrapper">
                <Link to="/" style={{textDecoration: "none"}}><div className="logo">
                    <LogoIcon/>
                    <div className="text">IMw</div>
                </div></Link>
                <DropdownButton 
                    id="dropdown-basic-button" 
                    title="Genres" 
                    className="menu"
                >
                    <Link to="/movies/action" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">action</div>
                    </Link>
                    <Link to="/movies/comedy" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">comedy</div>
                    </Link>
                    <Link to="/movies/drama" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">drama</div>
                    </Link>
                    <Link to="/movies/fantasy" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">fantasy</div>
                    </Link>
                    <Link to="/movies/family" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">family</div>
                    </Link>
                    <Link to="/movies/historical" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">historical fiction</div>
                    </Link>
                    <Link to="/movies/horror" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">horror</div>
                    </Link>
                    <Link to="/movies/romance" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">romance</div>
                    </Link>
                    <Link to="/movies/scifi" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">science fiction</div>
                    </Link>
                    <Link to="/movies/thriller" style={{textDecoration: 'none'}}>
                        <div className="dropdown-item">thriller</div>
                    </Link>
                    
                </DropdownButton>
                
                <div className="searchBar">
                    <SearchIcon/>
                    <span className="line"></span>
                    <input type="text" id="search" placeholder="Search movie..."/>
                </div>
                <Link to="/movies/watchlist" style={{textDecoration: "none"}}><div className="watchList">Watchlist</div></Link>
                <Link to="/movies/fanfav" style={{textDecoration: "none"}}><div className="login">Fan Favorites</div></Link>
            </div>
        </header>
    );
}
