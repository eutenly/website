import axios from "axios";
import endpoint from "./endpoint";

export default async function disconnect(connection) {

    // Fetch
    return await axios.delete(endpoint("api/v1/connection"), {
        connection
    });
}