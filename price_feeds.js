
const axios = require("axios")

const price_feed = async () => {

    let response
    const url = "https://hermes.pyth.network/v2/price_feeds"

    await axios.get(url)
        .then(_response => {
            // console.log("Price Feed Data: ", JSON.stringify(_response.data, null, 4))
            response = _response.data
        })
        .catch(_error => {
            console.log("Price Feed Error: ", _error)
        })
    
    return response
}

module.exports = price_feed
