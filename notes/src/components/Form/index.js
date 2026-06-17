import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {v4} from 'uuid';
function Form(props) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {add} = props;
    const navigate = useNavigate();
    const addNote = (e) => {
        e.preventDefault();
        // Logic to save the note will go here
        const note = {
            id : v4(),
            title,
            content
        };
        add(note);
        setTitle('');
        setContent('');
        navigate('/');
    }
  return (
    <div>
      <h1>Add Note</h1>
      <form onSubmit = {addNote}>
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
        <br/>
        <br/>
        <textarea placeholder="Content" value={content} onChange={(e) => setContent(e.target.value)}></textarea>
        <br/>
        <br/>
        <button type="submit">Save Note</button>
      </form>
    </div>
  );
}

export default Form;