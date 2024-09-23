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


 

    const article = [{
        text: "elozelo jakis tutaj tekst ktory sobe pisze B) ",
        title: "tytul tekstu"
    }]

    return(<>

        <div id="logo">  jakies logo xd  </div>

        <Link to={'/addNote'}>ADD NOTES</Link>


        <ul>
            {
                notes.map((element) => {
                    return( <li>{element.title}</li>);
                })
                
               

            }
        </ul>
        
    
   
    </>);
}

export default MainPage;