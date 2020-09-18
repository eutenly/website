import React from "react";
import Head from "../components/Head";

export default class Invite extends React.Component {

    render = () => (
        <Head
            title="Invite - Eutenly"
            description="Add Eutenly to your server."
            redirect="https://discord.com/oauth2/authorize?client_id=733753582507261999&scope=bot&permissions=314432"
        />
    );

};