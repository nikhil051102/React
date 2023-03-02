import React, {useState} from 'react'

 function About() {
    const[myStyle, setMyStyle] = useState({
        color:'orange',
        backgroundColor:'orange'
    })

    const[btnText, setBtnText] = useState("Enable Blue Mode");

    const changeMode=()=> {
        if(myStyle.color === 'orange') {
            setMyStyle ({
                color:'blue',
                backgroundColor:'blue'
            })
            setBtnText("Enable Orange Mode")
        }
        else {
            setMyStyle({
                color:'orange',
                backgroundColor:'orange'
            })
            setBtnText("Enable Blue Mode")
        }
    }
  return (
    <>
    <div className="container" style={myStyle}>
      <div class="alert alert-primary" role="alert">
        A simple success alert—check it out!
      </div>
        <button onClick={changeMode} type="button" class="btn btn-primary">{btnText}</button>
    </div>
    </>
  )
}

export default About;
