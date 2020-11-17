const express = require('express')
const fs = require('fs')
const app = express()
const path = require('path')
const generateUniqueId = require('generate-unique-id');


const PORT = process.env.PORT || 3000
const saveFile = './db/db.json' 

// will share any static html files with the browser
app.use( express.static('public') )
// accept incoming POST requests
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Data =======================================================
let noteList = fs.existsSync(saveFile) ?
    JSON.parse( fs.readFileSync(saveFile) ) : []


// Routes (Endpoints) =========================================
app.get('/api/notes', function(req, res) {
    res.send( noteList )
})


app.post('/api/notes', function(req, res) {
    const newNoteData = req.body
    req.body.id = generateUniqueId();
    console.log( `noteList(${noteList.length} entries), adding newNoteData: \n`, newNoteData )
    noteList.push( newNoteData )
    // save to a file, as a string like localStorage
    fs.writeFileSync( saveFile, JSON.stringify( noteList ) )

    res.send( { message: `Saved *${newNoteData.title}*` } )
});
    
app.delete('/api/notes/:noteId', function(req, res) {
    const noteId = req.params.noteId
    console.log( `noteList(${noteList.length} entries), deleting note with ID: \n`, noteId )
    noteId.push( newNoteData )
    // save to a file, as a string like localStorage
    fs.writeFileSync( saveFile, JSON.stringify( noteList ) )

    res.send( { message: `Deleted *${newNoteData.title}*` } )
});

// Routes (Endpoints) =========================================
app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

// Listener ==================================================
app.listen(PORT, function() {
    console.log('Serving notes on PORT ' + PORT)
})