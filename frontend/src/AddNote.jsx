import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";



function AddNote(){

    const [text, setText] = useState();
    const [title, setTitle] = useState();
    const navigate = useNavigate();



    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/addNote', {text, title})
        .then((result)=>{navigate('/')})
        .catch(err => console.log(err));
    }


    
    return(<>
        <input type="text" placeholder="title"
        onChange={(e)=>{setTitle(e.target.value)}}/>

        <textarea name="" id="" onChange={(e)=>{return setText(e.target.value)}}></textarea>
        <button onClick={Submit}>Save</button>
    
    
    </>);
}

export default AddNote;