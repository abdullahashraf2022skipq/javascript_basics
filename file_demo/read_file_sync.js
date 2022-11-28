const fs = require('fs');

const get_data = () => {
    const fileObj = fs.readFileSync("notes.json")
    const data = fileObj.toString()
    const result = JSON.parse(data)
    return result
}

const writeData = (notes) => {
    const data = JSON.stringify(notes)
    fs.writeFileSync("notes.json", data)
}


const addNote = (title, body) => {
    const notes = get_data()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
    } else {
        console.log("Note title taken!")
    }
    writeData(notes)
}

addNote("My title", "My body")