import NotebookForm from "./NotebookForm"


const NewNotes = ({setNotes}) => {
    const addNewNote = (newNoteData) => {
        setNotes((prevNotes) => [...prevNotes, newNoteData]);
    }
  return (
    <div>
        <NotebookForm addNewNote={addNewNote} />
    </div>
  )
}

export default NewNotes