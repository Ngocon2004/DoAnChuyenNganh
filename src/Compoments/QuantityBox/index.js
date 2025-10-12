import Button from '@mui/material/Button';
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import React, { useState } from 'react';



const QuantityBox = (props) => {

    const[inputVal, setInputVal]=useState(1);
    
    const minus=()=>{
        if(inputVal!==1&& inputVal>0){
            setInputVal(inputVal-1)
        }
    }

    const plus=()=>{
        setInputVal(inputVal+1);
    }

    return (
        <div className="quantityDrop d-flex align-items-center">
            <Button className="btn btn-light" onClick={minus}><FaMinus /></Button>
           <input type="text" value={inputVal}/>
            <Button className="btn btn-light" onClick={plus}><FaPlus /></Button>
        </div>
        
    )
}

export default QuantityBox;
