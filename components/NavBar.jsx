import React from "react";
import "./navBar.scss";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <div id="nav-bar">

            <a className="home-button" href="/"><img src="/assets/logo.svg" /></a>

            <div className="bar">
                <a className="nav-bar-button" href="/invite">Invite</a>
                <a className="nav-bar-button" href="/support-server">Support</a>
                <a className="nav-bar-button" href="/voter-perks">Voter Perks</a>
                <a className="nav-bar-button" href="/patreon">Patron Perks</a>
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

                    <a className="menu-menu-button" href="/invite">
                        <img className="button-icon" src="/assets/plus.svg" />
                        <p className="button-text">Invite</p>
                    </a>
                    <a className="menu-menu-button" href="/support-server">
                        <img className="button-icon" src="/assets/life-ring.svg" />
                        <p className="button-text">Support</p>
                    </a>
                    <a className="menu-menu-button" href="/voter-perks">
                        <img className="button-icon" src="/assets/arrow.svg" />
                        <p className="button-text">Voter Perks</p>
                    </a>
                    <a className="menu-menu-button" href="/patreon">
                        <img className="button-icon" src="/assets/patreon.svg" />
                        <p className="button-text">Patron Perks</p>
                    </a>

                    <div className="line" />

                </div>

            </div>

        </div>
    );
};