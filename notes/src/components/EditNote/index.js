import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
function EditNote(props) {
    const { notes, onSave } = props;
    const params = useParams();
    const { id } = params;
    const note = notes.find((note) => note.id === id);
    const navigate = useNavigate();
    const [title, setTitle] = useState(note.title);
    const [content, setContent] = useState(note.content);
    return (
        <div>
            <h2> Edit Note </h2>
            <form>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
                <br/>
                <br/>
                <textarea value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                <br/>
                <br/>
                <button type="button" onClick={() => {onSave({ title, content });
            navigate('/'); }}>Save</button>
            </form>
        </div>
    )
}
export default EditNote;