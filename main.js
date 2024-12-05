
const { date_time } = require("./helper")
const price_feed = require("./price_feeds")
const price_stream = require("./price_stream")

const main = async () => {

    let price_feed_ids = new Array()
    const price_feed_data = await price_feed()
    console.log(price_feed_data.length)
    price_feed_data.forEach(_price_feed => {
        price_feed_ids.push(_price_feed.id)
    })
    
    for (let index = 0; index <= price_feed_ids.length / 100; index++) {
        const _id_list = price_feed_ids.slice(index * 100, (index + 1) * 100)
        
        await price_stream(_id_list)
        // console.log(_id_list)
    }
}
console.log(`Application started at ${date_time()}`)
main()
