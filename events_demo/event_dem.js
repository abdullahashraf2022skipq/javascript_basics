const EventEmitter = require("events").EventEmitter
const eventEmitter = new EventEmitter()

eventEmitter.on("myEvent", () => {
    console.log("Event fired!")
})
eventEmitter.on("myEvent", () => {
    console.log("Event fired again!")
})

eventEmitter.emit("myEvent")