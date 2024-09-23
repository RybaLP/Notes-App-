import { useEffect, useState } from "react";
import "../css/MainPage.css"
import {Link} from "react-router-dom";
import axios from 'axios';

function MainPage(){

    

    const [notes, setNote] = useState([]);

    useEffect(()=>{
        axios.get("http://localhost:5000")
        .then(result => setNote(result.data))
        .catch(err => console.log(err));
    })

    return(<>

        <div id="logo">  jakies logo xd  </div>

        <Link to={'/addNote'}>ADD NOTES</Link>

        <ul>
            {
                notes.map((note) => {
                    return( <><li key={note._id}>{note.title}</li> <Link to={'/editNote/'+ note._id}>Edit</Link></>);
                })
            }
        </ul>
    </>);
}

export default MainPage;