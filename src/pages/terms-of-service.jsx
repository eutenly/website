import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/global.scss";

export default () => {
    return (
        <div id="terms-of-service">

            <Head
                title="Terms of Service - Eutenly"
                description="Eutenly's terms of service"
            />
            <NavBar />

            <iframe src="https://tos.eutenly.workers.dev/Eutenly-Terms-of-Service-29158df8e82f4e0284e9cab6b2debcf4" className="iframe" title="Terms of Service" frameBorder="0"></iframe>

            <Footer />

        </div>
    );
};