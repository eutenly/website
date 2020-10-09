import React from "react";
import { Helmet } from "react-helmet";

export default function Head(props) {
    let redirectScript = [];
    if (props.redirect) {
        redirectScript = [{
            type: "text/javascript",
            innerHTML: `window.location = "${props.redirect}"`
        }];
    }
    return (
        <Helmet script={redirectScript}>
            {/* Favicon */}
            <link rel="icon" href="/assets/favicon.ico" />
            <link rel="manifest" href="/manifest.json" />

            {/* Embed base */}
            <meta content="/assets/logo.png" property="og:image" />
            <meta content="Eutenly" property="og:site_name"/>
            <meta content="#f40b3d" name="theme-color" />

            {/* Page info */}
            <title>{props.title}</title>
            <meta name="description" content={props.description} />
            <meta name="og:title" content={props.title} />
            <meta name="og:description" content={props.description} />
        </Helmet>
    );
}