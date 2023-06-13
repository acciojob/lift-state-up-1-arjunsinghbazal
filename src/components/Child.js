import React from "react";

const Child=({showModal},{setModal})=>{

return(
<>
    <h1>Child Component</h1>
    <button onClick={setModal}>Show Model</button>
    {showModal&&<div><h3>Modal Content</h3><br/><h3>This is Modal content</h3></div>}
</>)
}

export default Child;