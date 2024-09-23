import React, { useEffect, useState } from "react";
import {Link, useParams, useNavigate} from 'react-router-dom';
import axios from 'axios';
import '../css/EditNote.css'

function EditNote(){

    const {id} = useParams();
    const [text, setText] = useState('');
    const [title, setTitle] = useState('');

    const [bgcolor, setBgColor] = useState('#000000');
    const [fontcolor, setFontColor] = useState("#FFFFFF");



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

        <div className="colors">

            <label >Kolor czcionki:</label>
            <input type="color" onChange={(e)=>{setFontColor(e.target.value)}}/>
            <label>Kolor tła:</label>
            <input type="color" onChange={(e)=>{setBgColor(e.target.value)}} />

        </div>
        
        <input
            type="text" placeholder="title" value={title} style={{color: fontcolor}}
            onChange={(e) => {return(setTitle(e.target.value))}}>
        </input>

        <textarea
            name="" id="" 
            onChange={(e) => {return setText(e.target.value)}} value={text} style={{backgroundColor: bgcolor, color: fontcolor}}>
        </textarea>

        <button onClick={Submit}>Submit changes</button>

    </>);

}

export default EditNote;