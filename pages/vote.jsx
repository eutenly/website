import React from "react";
import Head from "../components/Head";

export default class Vote extends React.Component {

    render = () => (
        <Head
            title="Vote - Eutenly"
            description="Vote for Eutenly on Top.GG for some extra perks."
            redirect="https://top.gg/bot/733753582507261999/vote"
        />
    );

};