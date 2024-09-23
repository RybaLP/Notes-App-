import React, { useEffect, useState } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';

function EditNote(){

    const {id} = useParams();
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:5000/getNote/' + id)
        .then(result => {
            console.log(result.data)
            setText(result.data.text || "")
            setTitle(result.data.title || "")
            console.log('setted prop');
            console.log(title);
        })
        .catch(err => console.error(err));
    }, [id])

    const Submit = (e) => {
        e.preventDefault();
        axios.put("http://localhost:5000/editnote/"+id, {text, title})
        .then(result => navigate('/'))
        .catch(err => console.log(err))
    }

    return(<>

        <input
            type="text" placeholder="title" value={title}
            onChange={(e) => {return(setTitle(e.target.value))}}>
        </input>

        <textarea
            name="" id="" 
            onChange={(e) => {return setText(e.target.value)}} value={text}>
        </textarea>

        <button onClick={Submit}>Submit changes</button>

    </>);

}

export default EditNote;