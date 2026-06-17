import {useParams , useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
function Note(props) {
    const navigate = useNavigate();
    const params = useParams();
    const {id} = params;
    const note = props.notes.find((note) => note.id === id);
    if (!note) {
        return <h2>Note not found</h2>
    }
    const del = function(){
        navigate('/');
        props.deleteNote(id)
    }
    const edit = function(){
        navigate(`/edit-note/${id}`);
    }
    return (
        <div> 
            <h1> {note.title} </h1>
            <p> {note.content} </p>
            <button type = "button" onClick={del}>
                Delete Note
            </button>
            <button type = "button" onClick={edit}> Edit Note </button>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <button type = "button"> Back </button>
            </Link>
        </div>

    )
}
export default Note;