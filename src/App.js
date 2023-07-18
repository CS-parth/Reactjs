import React from 'react';
import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [Mode,setMode] = useState('light');
  const toggleMode = ()=>{
    if(Mode == 'light'){
      setMode('dark');
      document.body.style.background = 'black';
    }else{
      setMode('light');
      document.body.style.background = 'white';
    }
  }
  return (
   
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" Mode={Mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        <TextForm heading="This is the heading" Mode={Mode}/>
      </div>
      <About/>
    </>

  );
}

export default App;
