import React from "react";
import Head from "../components/Head";

export default class Patreon extends React.Component {

    render = () => (
        <Head
            title="Patreon - Eutenly"
            description="Support Eutenly on Patreon for some extra perks."
            redirect="https://patreon.com/eutenly"
        />
    );

};