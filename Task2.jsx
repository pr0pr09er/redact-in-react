import React from "react";
import { useState } from "react";

function Task2() {
  const [notes, setNotes] = useState([
    {
      id: 0,
      fields: [
        { name: "prop1", value: "value11", isEdit: false },
        { name: "prop2", value: "value12", isEdit: false },
        { name: "prop3", value: "value13", isEdit: false },
      ],
    },
    {
      id: 1,
      fields: [
        { name: "prop1", value: "value11", isEdit: false },
        { name: "prop2", value: "value12", isEdit: false },
        { name: "prop3", value: "value13", isEdit: false },
      ],
    },
    {
      id: 2,
      fields: [
        { name: "prop1", value: "value11", isEdit: false },
        { name: "prop2", value: "value12", isEdit: false },
        { name: "prop3", value: "value13", isEdit: false },
      ],
    },
  ]);

  const rows = notes.map((note) => {
    const cells = note.fields.map((field) => {
      let elem;

      if (!field.isEdit) {
        elem = (
          <span onClick={() => startEdit(note.id, field.name)}>
            {field.value}
          </span>
        );
      } else {
        elem = (
          <input
            value={field.value}
            onChange={(event) => changeCell(note.id, field.name, event)}
            onBlur={() => endEdit(note.id, field.name)}
          />
        );
      }

      return <td key={field.name}>{elem}</td>;
    });

    return <tr key={note.id}>{cells}</tr>;
  });

  const editCell = (id, name, props) => {
    setNotes(
      notes.map((note) => {
        if (note.id === id) {
          const fields = note.fields.map((field) => {
            if (field.name === name) {
              return { ...field, ...props };
            } else {
              return field;
            }
          });

          return { id, fields };
        } else {
          return note;
        }
      })
    );
  };

  const startEdit = (id, name) => {
    editCell(id, name, { isEdit: true });
  };

  const endEdit = (id, name) => {
    editCell(id, name, { isEdit: false });
  };

  const changeCell = (id, name, event) => {
    editCell(id, name, { value: event.target.value });
  };

  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
}

export default Task2;
