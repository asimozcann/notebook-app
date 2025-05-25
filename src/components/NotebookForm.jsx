import { useState } from "react";
import "./NotebookForm.css";
const NotebookForm = (props) => {
  const [noteTitle, setnoteTitle] = useState("");
  const [noteContent, setnoteContent] = useState("");

  const handleTitleChange = (e) => {
    setnoteTitle(e.target.value);
  };
  const handleContentChange = (e) => {
    setnoteContent(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (noteTitle.trim() === "" || noteContent.trim() === "") {
      alert("Lütfen not başlığı ve içeriğini doldurun!");
      return;
    }
    const newNoteData = {
      noteTitle,
      noteContent,
    };
    props.addNewNote(newNoteData);
    setnoteTitle("");
    setnoteContent("");
    alert("Yeni not eklendi!");
  };
  return (
    <form className="note-form" onSubmit={submitHandler}>
      <h1>Yeni Not Ekle:</h1>
      <div className="note-content">
        <input
          type="text"
          placeholder="Not Başlığı"
          onChange={handleTitleChange}
          value={noteTitle}
        />
        <textarea
          id=""
          placeholder="Notunuzu buraya yazınız..."
          onChange={handleContentChange}
          value={noteContent}
        ></textarea>
      </div>
      <button type="submit">
        {" "}
        <i className="fa-solid fa-plus"></i>Notu Ekle
      </button>
    </form>
  );
};

export default NotebookForm;
