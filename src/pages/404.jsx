import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import { Link } from "gatsby";
import "../styles/global.scss";

export default class VoterPerks extends React.Component {

    render = () => (
        <div id="index">

            <Head
                title="404 Page not found - Eutenly"
                description="404 - Page not found"
            />
            <NavBar />

            <div className="intro">

                <div className="background-effect" />

                <div className="about">
                    <div className="about-content">

                        <h1 className="title">404</h1>
                        <p className="info">Page not found</p>

                        <div className="divider" />

                        <p className="description">Sorry, We can't find the page you're looking for!</p>

                        <Link className="button" to="/" target="_blank">Go back home</Link>

                    </div>
                </div>

            </div>

            {/* <Footer /> */}

        </div>
    );

};