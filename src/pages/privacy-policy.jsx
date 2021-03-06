import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import "../styles/global.scss";

export default () => {
    return (
        <div id="privacy-policy">

            <Head
                title="Privacy Policy - Eutenly"
                description="Eutenly's privacy policy"
            />
            <NavBar />

            <iframe src="https://privacy.eutenly.workers.dev/Eutenly-Privacy-Policy-8c60986d76f347db82309c4731fa2943" className="iframe" title="Privacy Policy" frameBorder="0"></iframe>

            <Footer />

        </div>
    );
};