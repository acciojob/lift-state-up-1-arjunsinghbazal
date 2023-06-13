import React from "react";

const Child=({showModal},{setModal})=>{

return(
<>
    <h1>Child Component</h1>
    <button onClick={setModal}>Show Model</button>
    {showModal&&<h3>Modal Content</h3>}
</>)
}

export default Child;