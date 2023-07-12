import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { dkeeper_backend } from "../../../declarations/dkeeper_backend";

function App() {
  const [notes, setNotes] = useState([]);

  async function addNote(newNote) {
    setNotes(prevNotes => {
      return [newNote, ...prevNotes];
    });
    dkeeper_backend.createNote(newNote.title, newNote.content);
  }

  async function fetchData() {
    const notes = await dkeeper_backend.readNotes()
    setNotes(notes)
  }

  useEffect(() => {
    fetchData()
  }, [])

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter((noteItem, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((noteItem, index) => {
        return (
          <Note
            key={index}
            id={index}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
      <Footer />
    </div>
  );
}

export default App;
