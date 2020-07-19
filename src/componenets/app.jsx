import React, {useState} from "react";
import Header from "./header"
import Footer from "./footer"
import Note from "./note"


function App () {
    
    const [notes, setNotes] = useState([]);
    const [currentNote, setCurrentNote] = useState("");
    const addNote = ()=>{
        setNotes([...notes, currentNote])
        setCurrentNote("")
    }
    const editNote = (e)=>{
        setCurrentNote(e.target.value)
    }

    return (
        <div>
        <Header />
        <input type="text" onChange={editNote} value={currentNote}/>
        <button className="btn btn-outline-dark warning btn-small" onClick={addNote}>Add Note</button>
        {
            notes.map((n, i) => {
                return <Note title={n} key={i} />
            })
        }
        <Footer />
        </div>
    );
}
export default App;