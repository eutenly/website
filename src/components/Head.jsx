import React from "react";
import {Helmet} from "react-helmet";

export default function Head(props) {
    let redirectScript = []
    if (props.redirect) {
        redirectScript = [{ 
            type: 'text/javascript', 
            innerHTML: `window.location = "${props.redirect}"`
        }]
    }
    return (
        <Helmet script={redirectScript}>
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
        </Helmet>
    );
}