import React from "react";

function Note(props) {

  function del(){
    props.onDelete(props.id)
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={del}>DELETE</button>
    </div>
  );
}

export default Note;
