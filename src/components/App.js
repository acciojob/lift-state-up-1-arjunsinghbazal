
import React, { useState } from "react";
import './../styles/App.css';
import Child from "./Child";
const App = () => {
  const [showModal,setstate]=useState(false);
  const setModal=()=>{
  setstate(true);
  }
  return (
    <div className="parent">
        <h1>Parent Component</h1>
        <Child showModal={showModal} setModal={setModal} />
    </div>
  )
}

export default App
