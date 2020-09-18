import React from "react";
import "./navBar.scss";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/navBar.scss";

export default class NavBar extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <div id="nav-bar">

            <Link className="home-button" to="/"><img src="/assets/logo.svg" /></Link>

            <div className="bar">
                <Link className="nav-bar-button" to="/invite">Invite</Link>
                <Link className="nav-bar-button" to="/support-server">Support</Link>
                <Link className="nav-bar-button" to="/voter-perks">Voter Perks</Link>
                <Link className="nav-bar-button" to="/patreon">Patron Perks</Link>
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
                        <img className="button-icon" src="/assets/plus.svg" />
                        <p className="button-text">Invite</p>
                    </Link>
                    <Link className="menu-menu-button" to="/support-server">
                        <img className="button-icon" src="/assets/life-ring.svg" />
                        <p className="button-text">Support</p>
                    </Link>
                    <Link className="menu-menu-button" to="/voter-perks">
                        <img className="button-icon" src="/assets/arrow.svg" />
                        <p className="button-text">Voter Perks</p>
                    </Link>
                    <Link className="menu-menu-button" to="/patreon">
                        <img className="button-icon" src="/assets/patreon.svg" />
                        <p className="button-text">Patron Perks</p>
                    </Link>

                    <div className="line" />

                </div>

            </div>

        </div>
    );
};