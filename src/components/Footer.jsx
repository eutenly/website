import React from "react";
import {graphql, Link, StaticQuery} from "gatsby";
import "../styles/footer.scss";

class Footer extends React.Component {

    render = () => (
        <div id="footer">

            <Link className="home-button" to="/"><img src="/assets/text-logo.svg" alt="Eutenly logo" /></Link>

            <p className="copyright">Copyright &copy; {this.props.year} <a id="apixel" href="https://apixel.me">APixel Visuals</a> and <a id="maiacodes" href="https://maia.codes">Maia</a></p>

            <p className="links"><Link to="/terms-of-service">Terms of Service</Link> &bull; <Link to="/privacy-policy">Privacy Policy</Link></p>
            <p className="affiliation">Eutenly is not affiliated with Discord or any 3rd party service we integrate with.</p>

        </div>
    );
};

export default () => (
    <StaticQuery query={graphql`
        {
          site {
            buildTime(formatString: "YYYY")
          }
        }
    `} render={(data) => ( <Footer year={data.site.buildTime} /> )}/>
)
