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


const addNote = (title, author) => {
    const notes = get_data()
    const duplicateNotes = notes.filter((note) => note.title === title)

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            author: author
        })
    } else {
        console.log("Note title taken!")
    }
    writeData(notes)
}

const displayNotes = () => {
    const notes = get_data()
    notes.forEach((note) => {
        console.log(note.title, "\tBy:", note.author)
        // console.log(note.author)
    })
}

const displayAuthor = (title) => {
    const notes = get_data()
    const note = notes.find((note) => note.title === title)
    if (note) {
        console.log(note.author)
    } else {
        console.log("Note not found!")
    }
}

const removeNote = (title) => {
    const notes = get_data()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if (notes.length > notesToKeep.length) {
        console.log("Note removed!")
        writeData(notesToKeep)
    } else {
        console.log("No note found!")
    }
}

addNote("My title", "My author")
displayNotes()
console.log("----------------------------")
removeNote("My title")
console.log("----------------------------")
displayNotes()