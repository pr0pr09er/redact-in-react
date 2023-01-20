import React from "react";
import { useState } from "react";

function Task1() {
  const [notes, setNote] = useState([
    {text: 'value1', isEdit: false},
    {text: 'value2', isEdit: false},
    {text: 'value3', isEdit: false},
  ]);

  function startEdit(index) {
    const copy = Object.assign([], notes);
    copy[index].isEdit = true;
    setNote(copy);
  }

  function endEdit(index) {
    const copy = Object.assign([], notes);
    copy[index].isEdit = false;
    setNote(copy);
  }
  
  function changeNote(index, event) {
    const copy = Object.assign([], notes);
    copy[index].text = event.target.value;
    setNote(copy);
  }

  let result = notes.map((note, index) => {
    let elem;

    if (!note.isEdit) {
      elem = <span onClick={() => startEdit(index)}>
        {note.text}
      </span>;
    } else {
      elem = <input
       type="text"
       value={note.text}
       onChange={event => changeNote(index, event)}
       onBlur={() => endEdit(index)} 
      />;
    }

    return <li key={index}>{elem}</li>
  });

  return (
    <div>
      <ul>{result}</ul>
    </div>
  );
}

export default Task1;
