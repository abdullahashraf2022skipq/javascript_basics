const events = require("events")
const fs = require("fs")

const event = new events.EventEmitter()

event.addListener("updateResult", () => {
    console.log("Result Updated")
}
)
fs.readFile("events.txt", "utf-8", (err, data) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(data)
        event.emit("updateResult")
    }
})