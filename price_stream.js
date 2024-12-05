
const axios = require("axios")

const price_stream = async (_id_list) => {

    const query = _id_list.map((id) => `ids[]=${id}`).join("&")

    const response = await axios.get(
        `https://hermes.pyth.network/v2/updates/price/stream?${query}`,
        {
            responseType: "stream",
        }
    )

    // Listening to the data as it arrives
    response.data.on("data", (chunk) => {
        console.log(chunk.toString()) // Process each chunk of data
    })

    // Handle stream end
    response.data.on("end", () => {
        console.log("Stream ended.")
    })

    // Handle errors in the stream
    response.data.on("error", (err) => {
        console.error("Stream error:", err.message)
    })
}

module.exports = price_stream

