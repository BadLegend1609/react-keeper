import React, { useState } from "react";

function CreateArea(props) {


  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  const handleChange = (e) => {
    const type = e.target.name
    const body = e.target.value
    setNote((p)=> {
      return {...p, [type]: body};
    })
  }
  
  const submitNote = (e) => {
    e.preventDefault();
    props.onAdd(note)
    setNote({
      title: "",
      content: ""
    })
    
  }
  return (
    <div>
      <form autocomplete="off">
        <input autocomplete="false" name="hidden" type="text" style={{display: "none"}} />
        <input onChange={handleChange} value={note.title} name="title" placeholder="Title" />
        <textarea onChange={handleChange} value={note.content} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
