import axios from "axios";
import endpoint from "./endpoint";

export default async function getConnections() {

    // Fetch
    return await axios({
        method: "get",
        url: endpoint("me"),
        validateStatus: status => status < 500
    });
}
