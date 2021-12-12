import React, { useState } from "react";
import {Questions} from './api';
import MyAccordion from './MyAccordion';
import './accordion.css';
const Accordion=()=>{
    const [data,setdata]=useState(Questions);
    return(
        <>
        <section className="main_div">
            {
                data.map((val)=>{ 
                    const { id}=val;
                    return <MyAccordion key={id} {...val} />
            })
            }
        </section>
        </>
    );
}
export default Accordion;