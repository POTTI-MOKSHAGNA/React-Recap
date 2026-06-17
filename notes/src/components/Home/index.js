import React , {useState} from 'react';
import { Link } from 'react-router-dom';
function Home(props) {
    const {notes} = props;
    const [searchTerm, setSearchTerm] = useState('');
    const filteredNotes = notes.filter(note => note.title.toLowerCase().includes(searchTerm.toLowerCase()));
    return (
        <div>
            <h1> Notes Web Page </h1>
            <input 
                type="text" 
                placeholder="Search notes..." 
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ol>
                {filteredNotes.map((note) => (
                    <li key={note.id}>
                        <Link to={`/note/${note.id}`} style={{ textDecoration: 'none' }}>
                             <h2>{note.title}</h2>
                             <p>{note.content.substring(0, 20)}...</p>
                        </Link> 
                    </li>
                ))}
            </ol>
            <Link to="/add-note">
                <button type = "button"> Add Note </button>
            </Link>
        </div>
    )
}

export default Home;