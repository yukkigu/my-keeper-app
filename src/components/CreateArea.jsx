import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [zoom, setZoom] = useState(false);

  // Keeps track of the title and content of new notes
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    // destructured object to get name and value from event.target
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    if (note.title != "" && note.content != "") {
      props.onAdd(note);
      setNote({
        title: "",
        content: "",
      });
    }
    event.preventDefault();
  }

  function expand() {
    setZoom(true);
  }

  return (
    <div>
      <form className="create-note">
        {zoom && (
          <textarea
            name="title"
            placeholder="Title"
            rows="1"
            onChange={handleChange} // function to update title on user input
            value={note.title} // value will be updated based on user input
          />
        )}
        <textarea
          name="content"
          placeholder="Take a note..."
          rows={zoom ? "3" : "1"}
          onClick={expand}
          onChange={handleChange} // function to update content on user input
          value={note.content} // value will be updated based on user input
        />
        <Zoom in={zoom}>
          <Fab id="addButton" onClick={submitNote}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}
export default CreateArea;
