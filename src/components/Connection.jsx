import React from "react";
import "../styles/connection.scss";

export default class Connection extends React.Component {

    render = () => (
        <div id="connection">
            <div className="connection-content">

                <div className="name">
                    <img src={`/assets/${this.props.name}.svg`} alt={`${this.props.displayName} logo`} className="icon" />
                    <p className="text">{this.props.connection ? this.props.connection.username : this.props.displayName}</p>
                </div>

                {this.props.connection ?
                    (
                        <>
                            <p className="connected-at">Connected on {this.props.connection.connectedAt.toLocaleString("en-us", { month: "long" })} {this.props.connection.connectedAt.getDate()}, {this.props.connection.connectedAt.getFullYear()}</p>
                            <button className={`disconnect-button ${this.props.name}`} onClick={this.props.disconnect}>Disconnect</button>
                        </>
                    ) :
                    <a href={`/login/${this.props.name}`} className={`connect-button ${this.props.name}`}>Connect</a>
                }

            </div>
        </div>
    );

};