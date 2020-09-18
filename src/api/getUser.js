import endpoint from "./endpoint"

export default function getUser(userID) {
    axios.get(endpoint('me'))
    .then(res => {
        return res.data
    }).catch(error => {
        throw error
    })
}