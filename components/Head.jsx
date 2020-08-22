import React from "react";
import NextHead from "next/head";
import ReactGA from "react-ga";

export default class Head extends React.Component {

    constructor(props) {
        super(props);
    }

    render = () => (
        <NextHead>

            <title>{this.props.title}</title>
            <meta name="description" content={this.props.description} />

            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1 minimum-scale=1" />
            <meta name="theme-color" content="#ffffff" />
            <link rel="shortcut icon" href="/assets/favicon.ico" />

            {this.props.redirect && <meta httpEquiv="refresh" content={`0; url=${this.props.redirect}`} />}

        </NextHead>
    );

    componentDidMount = () => {

        //Google analytics
        ReactGA.initialize("UA-176088939-1");
        ReactGA.pageview(`${window.location.pathname}${window.location.search}`);
    };

}