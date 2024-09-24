import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";



function AddNote(){

    const [text, setText] = useState();
    const [title, setTitle] = useState();

    const [bgcolor, setBgColor] = useState('#000000');
    const [fontcolor, setFontColor] = useState("#FFFFFF");
    const [handleSpellCheck, setSpellCheck] = useState(false);


    const navigate = useNavigate();



    const Submit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/addNote', {text, title, fontcolor, bgcolor})
        .then((result)=>{navigate('/')})
        .catch(err => console.log(err));
    }

    const optionCheckSpelling = (e) => {
        setSpellCheck(e.target.checked);
    }

    return(<>

        <input type="checkbox" 
        checked={handleSpellCheck} 
        onChange={optionCheckSpelling}></input>
        <label>Sprawdzanie bledow</label>


        <Link to="/">Back</Link>

        <div className="colors">

            <label >Kolor czcionki:</label>
            <input type="color" onChange={(e)=>{setFontColor(e.target.value)}}/>
            <label>Kolor tła:</label>
            <input type="color" onChange={(e)=>{setBgColor(e.target.value)}} />

        </div>


        <input type="text" placeholder="title" style={{color: fontcolor}}
        onChange={(e)=>{setTitle(e.target.value)}}/>

        <textarea spellCheck={handleSpellCheck} name="" id="" onChange={(e)=>{return setText(e.target.value)}} style={{color: fontcolor, backgroundColor: bgcolor}}></textarea>
        <button onClick={Submit}>Save</button>
    
    
    </>);
}

export default AddNote;