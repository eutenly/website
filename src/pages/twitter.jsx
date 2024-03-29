import React from "react";
import Head from "../components/Head";

export default class Twitter extends React.Component {

    render = () => (
        <Head
            title="Twitter - Eutenly"
            description="Check out our Twitter for updates on development."
            redirect="https://twitter.com/eutenly"
        />
    );

};