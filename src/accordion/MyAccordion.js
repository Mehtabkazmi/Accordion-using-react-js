import React, { useState } from "react";
import { Questions } from "./api";

const MyAccordion=({question,answer})=>{
    const [show,setshow]=useState(false);
    
    return(<>
        <div className="main_heading">
            <p onClick={()=>setshow(!show)}>{show? "➖": "➕"}</p>
            <h3>{question}</h3>
        </div>
        {show && <p className="answers">{answer}</p>}
    </>);
    
}
export default MyAccordion;