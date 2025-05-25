import { useState } from "react";
import NewNotes from "./NewNotes";
import NotebookItem from "./NotebookItem";
import "./Notebook.css";
const Notebook = () => {
  const [notes, setNotes] = useState([]);

  const clearNote = () => {
    setNotes([]);
    alert("Tüm notlar silindi!");
  };
  const removeNote = (index) => {
    setNotes((prevNotes) => prevNotes.filter((_, i) => i !== index));
    alert("Not silindi!");
  };
  return (
    <div className="notebook">
      <h1 className="notebook-h1">Not Defteri Uygulaması</h1>

      <NewNotes setNotes={setNotes} />
      <h2>Notlar</h2>
      <div className="notes-wrapper">
        <div className="notes">
          {notes.map((note, index) => (
            <NotebookItem
              key={index}
              note={note}
              removeNote={() => removeNote(index)}
            />
          ))}
        </div>
      </div>
      <button className="btn" onClick={clearNote}>
        <i className="fa-solid fa-trash"> </i>
        Hepsini Sil
      </button>
    </div>
  );
};

export default Notebook;
