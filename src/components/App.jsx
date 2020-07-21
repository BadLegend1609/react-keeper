import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { createNotEmittedStatement } from "typescript";


function App() {
  const [notes, setNotes] = useState([]);
  
  function addNote (note){
    setNotes(prev => [...prev, note])
  }

  function deleteNote(id){
    setNotes(prev => {
      return prev.filter((n, index) => {return index !== id})
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map((n, i) => {
        return <Note key={i} id={i} title={n.title} content={n.content} onDelete={deleteNote} />
      })}
      <Footer />
    </div>
  );
}

export default App;
