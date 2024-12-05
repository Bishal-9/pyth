
const date_time = () => {

    const d = new Date()

    return `${d.toLocaleDateString("en-IN", { dateStyle: "full" })}, ${d.toLocaleTimeString("en-IN", { timeStyle: "full" })}`
}

module.exports = {
    date_time
}