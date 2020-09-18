export default function endpoint(route) {
    let rootEndpoint = "/api/v1";

    const currentLocation = window.location.href;
    if (currentLocation.startsWith("http://localhost")) {
        rootEndpoint = "http://localhost:8080/api/v1";
    }

    const endpoint = `${rootEndpoint}/${route}`;
    return endpoint;
}