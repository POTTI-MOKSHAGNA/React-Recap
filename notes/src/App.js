import {BrowserRouter, Routes, Route} from 'react-router-dom';
import { useState ,useEffect} from 'react';
import Home from './components/Home';
import Form from './components/Form';
import Note from './components/Note';
import EditNote from './components/EditNote';

function App() {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const storedNotes = localStorage.getItem('notes');
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);
  const add = (note) => {
    setNotes([...notes, note]);
  };
  const deleteNote = (noteId) => {
    const updatedNotes = notes.filter((note) => note.id !== noteId);
    setNotes(updatedNotes);
  };
  const onSave = (updatedNote) => {
    const updatedNotes = notes.map((note) => {
      if (note.id === updatedNote.id) {
        return updatedNote;
      }
      return note;
    });
    setNotes(updatedNotes);
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home  notes = {notes} />} />
        <Route path="/add-note" element={<Form add={add} />} />
        <Route path="/note/:id" element={<Note notes={notes} deleteNote={deleteNote} />} />
        <Route path="/edit-note/:id" element={<EditNote notes={notes} onSave={onSave} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;