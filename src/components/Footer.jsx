import React from "react";
import { Link } from "react-router-dom";
import "../styles/footer.scss";

export default class Footer extends React.Component {

    render = () => (
        <div id="footer">

            <Link className="home-button" to="/"><img src="/assets/text-logo.svg" alt="Eutenly logo" /></Link>

            <p className="copyright">Copyright &copy; {new Date().getFullYear()} <a href="https://apixel.me">APixel Visuals</a> and <a href="https://maia.codes">Maia</a></p>

            <p className="links"><Link to="/terms-of-service">Terms of Service</Link> &bull; <Link to="/privacy-policy">Privacy Policy</Link></p>
            <p className="affiliation">Eutenly is not affiliated with Discord or any 3rd party service we integrate with.</p>

        </div>
    );
};