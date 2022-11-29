const fs = require("fs")
const readline = require("readline")
const write_stream = fs.createWriteStream("output.txt")

const file = readline.createInterface({
    input: fs.createReadStream("input.txt")
})

let data = []
file.on("line", (line) => {
    const res = line.split(",")
    for (let i = 0; i < res.length; i++) {
        data.push(res[i].substring(0, 1).toUpperCase() + res[i].substring(1))
    }
    write_stream.write(data.toString() + "\n")
    data = []
})
