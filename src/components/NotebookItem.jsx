import "./NotebookItem.css";

const NotebookItem = ({ note, removeNote }) => {
  const { noteTitle, noteContent } = note;

  return (
    <div className="notebook-item">
      <ul>
        <li>
          <h3>{noteTitle}</h3>
          <p>{noteContent}</p>
          <button onClick={removeNote}>
            {" "}
            <i class="fa-solid fa-trash"></i>Sil
          </button>
        </li>
      </ul>
    </div>
  );
};

export default NotebookItem;
