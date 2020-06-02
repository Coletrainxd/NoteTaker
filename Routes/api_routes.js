const notes = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid/v4");
const util = require("util");

module.exports = function (app) {
  app.get("/api/notes", function (req, res) {
    readNotes();
  });

  app.post("/api/notes", function (req, res) {
    addNote(req.body);
  });

  app.delete("/api/notes/:id"),
    function (req, res) {
      removeNote(req.params.id);
    };
};

function readNotes() {
  util
    .promisify(fs.readFile("../db/db.json", "utf8"))
    .then(function (error, data) {
      if (error) {
        return console.log(error);
      }
      let notes = [].concat(JSON.parse(note));
      return notes;
    });
}

function addNote(note) {
  const newNote = { title, text, id: uuid };
  return this.getNotes()
    .then((note) => [...note, newNote])
    .then((newerNotes) => this.write(updatedNotes));
}

function removeNote(id) {
  return this.getNotes()
    .then(function (note) {
      note.filter((note) => note.id != id);
    })
    .then((filteredNotes) => this.write(filteredNotes));
}
