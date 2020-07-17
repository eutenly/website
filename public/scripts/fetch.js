module.exports = async (path, body) => {

    //Modules
    const fetch = require("node-fetch");

    //Make request
    let result = await fetch(`https://${window.location.hostname}:4000${path}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
    });
    result = await result.text();

    //Parse result: Boolean
    if (result === "true") return true;
    if (result === "false") return false;

    //Parse result: Array
    if ((result.startsWith("[")) && (result.endsWith("]"))) return JSON.parse(result);

    //Parse result: JSON
    if ((result.startsWith("{")) && (result.endsWith("}"))) return JSON.parse(result);

    //Parse result: String
    return result;
};