import React from "react";
import { Link } from "gatsby";
import "../styles/navBar.scss";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <div id="nav-bar">

            <Link className="home-button" to="/"><img src="/assets/logo-white.svg" alt="Eutenly logo" /></Link>

            <div className="bar">
                <Link className="nav-bar-button" to="/invite">Invite</Link>
                <Link className="nav-bar-button" to="/support-server">Support</Link>
                <Link className="nav-bar-button" to="/voter-perks">Voter Perks</Link>
                {/* <Link className="nav-bar-button" to="/patreon">Patron Perks</Link> */}
            </div>

            <div className={`menu-button ${this.state.menuOpen && "cross"}`} onClick={() => this.setState({ menuOpen: !this.state.menuOpen })}>
                <div className={`line-border ${this.state.menuOpen && "cross"}`} />
                <div className={`line line-1 ${this.state.menuOpen && "cross"}`} />
                <div className={`line line-2 ${this.state.menuOpen && "cross"}`} />
                <div className={`line line-3 ${this.state.menuOpen && "cross"}`} />
            </div>

            <div className={`menu ${this.state.menuOpen && "open"}`}>

                <div className={`menu-background ${this.state.menuOpen && "open"}`} />

                <div className={`menu-content ${this.state.menuOpen && "open"}`}>

                    <Link className="menu-menu-button" to="/invite">
                        <img className="button-icon" src="/assets/plus.svg" alt="Plus icon" />
                        <p className="button-text">Invite</p>
                    </Link>
                    <Link className="menu-menu-button" to="/support-server">
                        <img className="button-icon" src="/assets/life-ring.svg" alt="Life ring icon" />
                        <p className="button-text">Support</p>
                    </Link>
                    <Link className="menu-menu-button" to="/voter-perks">
                        <img className="button-icon" src="/assets/arrow.svg" alt="Up arrow icon" />
                        <p className="button-text">Voter Perks</p>
                    </Link>
                    <Link className="menu-menu-button" to="/patreon">
                        <img className="button-icon" src="/assets/patreon.svg" alt="Patron logo" />
                        <p className="button-text">Patron Perks</p>
                    </Link>

                    <div className="line" />

                </div>

            </div>

        </div>
    );
};