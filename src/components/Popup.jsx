import React from "react";
import "../styles/popup.scss";

export default class Popup extends React.Component {

    constructor(props) {
        super(props);
        this.componentRef = React.createRef();
    };

    render = () => {
        return (
            <div id="popup" ref={this.componentRef}>
                <div className="popup-content">

                    <p className="popup-text">{this.props.text}</p>

                    <button className="confirm-button" onClick={this.props.confirm}>{this.props.confirmText || "Confirm"}</button>
                    <button className="cancel-button" onClick={this.props.cancel}>Cancel</button>

                </div>
            </div>
        );
    };

    componentDidMount = () => document.addEventListener("click", this.mouseClick);

    componentWillUnmount = () => document.removeEventListener("click", this.mouseClick);

    mouseClick = e => {
        if (this.componentRef.current === e.target) this.props.cancel();
    };

};