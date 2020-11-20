import React from "react";
import Head from "../components/Head";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Popup from "../components/Popup";
import Connection from "../components/Connection";
import getConnections from "../api/getConnections";
import disconnect from "../api/disconnect";
import "../styles/connections.scss";

export default class Connections extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    render = () => (
        <div id="connections">

            <Head
                title="Connections - Eutenly"
                description="View your connected accounts"
            />
            <NavBar />

            {this.state.disconnect && (
                <Popup
                    text={`Are you sure you'd like to disconnect your ${this.state.disconnectName} account?`}
                    confirm={() => this.disconnect(this.state.disconnect)}
                    confirmText="Disconnect"
                    cancel={() => this.setState({ disconnect: null, disconnectName: null })}
                />
            )}

            {this.state.bannerText && (
                <div className="banner">
                    {this.state.bannerText}
                    <button className="close-button" onClick={() => this.setState({ bannerText: null, addedConnectionName: null, addedConnection: null, authenticationError: null })}>x</button>
                </div>
            )}

            <h1 className={`title ${this.state.addedConnection && "less-margin"}`}>Connections</h1>
            <p className="info">Here, you can manage your connected accounts. When an account is connected, you can use its integration with Eutenly. For example, to be able to use Twitter search, you'll need to link your Twitter account.</p>

            <div className="divider" />

            {this.state.connections && (
                <div className="connections">
                    <Connection name="twitter" displayName="Twitter" connection={this.state.connections.twitter} disconnect={() => this.setState({ disconnect: "twitter", disconnectName: "Twitter" })} />
                    <Connection name="spotify" displayName="Spotify" connection={this.state.connections.spotify} disconnect={() => this.setState({ disconnect: "spotify", disconnectName: "Spotify" })} />
                    <Connection name="reddit" displayName="Reddit" connection={this.state.connections.reddit} disconnect={() => this.setState({ disconnect: "reddit", disconnectName: "Reddit" })} />
                    <Connection name="github" displayName="GitHub" connection={this.state.connections.github} disconnect={() => this.setState({ disconnect: "github", disconnectName: "GitHub" })} />
                </div>
            )}

            {this.state.error && (
                <p className="error">An unknown error has occurred. Please try <button onClick={() => window.location.reload()}>refreshing</button> the page. If that doesn't work, you can join our <a href="/support-server">support server</a>, mention the <span>@Eutenlords</span> role, and let them know about the issue. We apologize for the inconvenience.</p>
            )}

            <Footer />

        </div>
    );

    componentDidMount = () => {

        // Get connections
        this.getConnections();

        // Get added connection
        const addedConnectionCookie = document.cookie.split(";").find(c => c.trim().startsWith("authed_with"));
        const addedConnectionName = addedConnectionCookie && addedConnectionCookie.split("=")[1];
        const addedConnection = {
            twitter: "Twitter",
            spotify: "Spotify",
            reddit: "Reddit",
            github: "GitHub"
        }[addedConnectionName];

        // Remove added connection cookie
        document.cookie = "authed_with=; expires=Thu, 01 Jan 1970 00:00:00 GMT";

        // Get authentication error
        const authenticationErrorCookie = document.cookie.split(";").find(c => c.trim().startsWith("auth_error"));
        const authenticationError = authenticationErrorCookie && authenticationErrorCookie.split("=")[1];

        // Remove authentication error cookie
        document.cookie = "auth_error=; expires=Thu, 01 Jan 1970 00:00:00 GMT"

        /**
         * Ignore Access Denied Errors
         *
         * This error is caused when the user decides not to authorize the app
         * Since the user has done this intentionally, don't display it
         */
        if (authenticationError === "access_denied") return;

        // Set state
        if ((addedConnection) && (!authenticationError)) this.setState({ bannerText: <p className="banner-text">Successfully connected to {addedConnection}</p> });
        else if (authenticationError === "server_error") this.setState({ bannerText: <p className="banner-text">There was an unexpected error connecting to {addedConnection}. Please <a href={`/login/${addedConnectionName}`}>try again</a></p> });
        else if (authenticationError === "temporarily_unavailable") this.setState({ bannerText: <p className="banner-text">There was an unexpected error connecting to {addedConnection}. Please wait a few minutes and then <a href={`/login/${addedConnectionName}`}>try again</a></p> });
        else if (authenticationError) this.setState({ bannerText: <p className="banner-text">There was an unexpected error connecting to {addedConnection}. Please join our <a href="/support-server">support server</a>, mention the <span>@Eutenlords</span> role, and send them a screenshot of this page. Error code <span>{authenticationError}</span></p> });
    };

    getConnections = () => {

        // Get connections
        getConnections()
            .then(res => {

                // Unauthorized
                if (res.status === 401) return window.location = "/login/discord";

                // Get connections
                const { connections } = res.data;

                // Parse connected at
                Object.values(connections).forEach(c => c.connectedAt = new Date(c.connectedAt));

                // Set state
                this.setState({ connections });
            })
            .catch(err => {

                // Log
                console.error(err);

                // Set state
                this.setState({ error: true });
            });
    };

    disconnect = async connection => {

        // Disconnect
        await disconnect(connection).catch(() => {});

        // Set state
        this.setState({ disconnect: null, disconnectName: null });

        // Get connections
        this.getConnections();
    };

};