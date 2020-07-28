import { useState } from "react";
import "./navBar.scss";

export default () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div id="nav-bar">

            <a className="home-button" href="/"><img src="/assets/logo.svg" /></a>

            <div className="bar">
                <a className="nav-bar-button" href="/invite">Invite</a>
                <a className="nav-bar-button" href="/features">Features</a>
                <a className="nav-bar-button" href="/support-server">Support</a>
                <a className="nav-bar-button" href="/voter-perks">Voter Perks</a>
                <a className="nav-bar-button" href="/patron-perks">Patron Perks</a>
            </div>

            <div className={`menu-button ${menuOpen && "cross"}`} onClick={() => setMenuOpen(!menuOpen)}>
                <div className={`line-border ${menuOpen && "cross"}`} />
                <div className={`line line-1 ${menuOpen && "cross"}`} />
                <div className={`line line-2 ${menuOpen && "cross"}`} />
                <div className={`line line-3 ${menuOpen && "cross"}`} />
            </div>

            <div className={`menu ${menuOpen && "open"}`}>

                <div className={`menu-background ${menuOpen && "open"}`} />

                <div className={`menu-content ${menuOpen && "open"}`}>

                    <a className="menu-menu-button" href="/invite">
                        <img className="button-icon" src="/assets/plus.svg" />
                        <p className="button-text">Invite</p>
                    </a>
                    <a className="menu-menu-button" href="/features">
                        <img className="button-icon" src="/assets/star.svg" />
                        <p className="button-text">Features</p>
                    </a>
                    <a className="menu-menu-button" href="/support-server">
                        <img className="button-icon" src="/assets/life-ring.svg" />
                        <p className="button-text">Support</p>
                    </a>
                    <a className="menu-menu-button" href="/voter-perks">
                        <img className="button-icon" src="/assets/arrow.svg" />
                        <p className="button-text">Voter Perks</p>
                    </a>
                    <a className="menu-menu-button" href="/patron-perks">
                        <img className="button-icon" src="/assets/patreon.svg" />
                        <p className="button-text">Patron Perks</p>
                    </a>

                    <div className="line" />

                </div>

            </div>

        </div>
    );
};