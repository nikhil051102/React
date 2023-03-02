import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm';
// import About from './components/About';
import React from 'react';

//React Routing
// import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  const[mode, setMode] = useState('light');

  const toggleMode =()=> {
    if(mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = "#042743"
      document.title = "TextUtils - Dark Mode"
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = "white"
      document.title = "TextUtils - Light Mode"
    }
  }

  return ( // eslint-disable-next-line
    <>
    {/* <Router>
      <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
        <div className="container">
        <Routes>
            <Route path='/about'> element={<About/>} /</Route>
            <Route path='/'> <TextForm heading="Enter the text to Analyze"/> </Route>
        </Routes>
        </div>
    </Router> */}
  <Navbar title="TextUtils" about="About" mode={mode} toggleMode={toggleMode}/>
  <div className="container">
        <TextForm heading="Enter the text to Analyze"/>
        {/* <About/> */}
    </div>
    </>
  );
}

export default App