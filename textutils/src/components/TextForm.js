import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=> {
        setText("Clicked on Uppercase")
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleOnChange =(event)=> {
        setText(event.target.value)
    }

    const handleLowercase = ()=> {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const [text, setText] = useState('')
  return (
    <>
    <div style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" placeholder='Enter text here' style={{backgroundColor:props.mode==='dark'?'grey':'white', color:props.mode==='dark'?'grey':'black'}} value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Uppercase</button>
        <button className="btn btn-primary mx-1" onClick={handleLowercase}>Lowercase</button>
    </div>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <p className='my-3'>{text.split(" ").length} words and {text.length} characters</p>
    </div>
    </>
  )
}
