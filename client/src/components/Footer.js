import IgIcon from "../icons/IgIcon";
import TwitterIcon from "../icons/TwitterIcon";
import YtIcon from "../icons/YtIcon";
import SpotifyIcon from "../icons/SpotifyIcon";
import LogoIcon from "../icons/LogoIcon";

export default function Footer() {
    return(
        <footer className="page-footer">
            <div className="wrapper">
                <div className="logo">
                    <LogoIcon/>
                    <div className="text">IMw</div>
                </div>
                <nav className="socmedNav">
                    <IgIcon />
                    <TwitterIcon />
                    <YtIcon />
                    <SpotifyIcon />
                </nav>
                <div className="ket">Inspired by IMDb. Made by Klp 6 Pemrograman Web kelas C Universitas Hasanuddin</div>
                <div className="teamMembers">
                    <div className="member">
                        <div className="name">Chindy Christie Davina</div>
                        <div className="nim">D121201077</div>
                    </div>
                    <div className="member">
                        <div className="name">Marselinus Jeffry P</div>
                        <div className="nim">D121201069</div>
                    </div>
                    <div className="member">
                        <div className="name">Muh. Adil Nusabakti</div>
                        <div className="nim">D1212010XX</div>
                    </div>
                    <div className="member">
                        <div className="name">Mutia Rahman</div>
                        <div className="nim">D1212010XX</div>
                    </div>
                </div>
            </div>
        </footer>
    );
}