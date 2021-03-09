import React from "react";
import Head from "../components/Head";

export default class Invite extends React.Component {

    render = () => (
        <Head
            title="Invite - Eutenly"
            description="Add Eutenly to your server."
            redirect="https://discord.com/oauth2/authorize?client_id=817516734654185503&scope=bot+applications.commands&permissions=388160"
        />
    );

};
