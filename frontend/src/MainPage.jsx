import { useEffect, useState } from "react";
import "../css/MainPage.css"
import {Link, useParams} from "react-router-dom";
import axios from 'axios';
import '../css/List.css';

function MainPage(){

    const [notes, setNote] = useState([]);

    const deleteNote = (id) =>{
        axios.delete('http://localhost:5000/deletenote/' + id)
        .then(res => window.location.reload())
        .catch(err=>{console.log(err)});
    }
    
    useEffect(()=>{
        axios.get("http://localhost:5000")
        .then(result => setNote(result.data))
        .catch(err => console.log(err));
    }, [])

    return(<>

        <div className="logo">  Notes </div>

        <Link to={'/addNote'}>ADD NOTES</Link>

        <ul>
            {
                notes.map((note) => {
                    return( <><li key={note._id}>{note.title}</li> <Link to={'/editNote/'+ note._id}>Edit</Link>
                    <button onClick={(e)=>{deleteNote(note._id)}}>Delete</button>
                    </>);
                })
            }
        </ul>
    </>);
}

export default MainPage;