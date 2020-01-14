import React, { useState, useEffect } from 'react';
import HookMouse from './HookMouse';

function MouseContainer() {

const [display,setDisplay]  = useState(true);
    return (
        <div>
            <button onClick={()=>setDisplay(!display)} >HookMouse {display}</button>
            {
                display && <HookMouse />
            }
        </div>
    )
}
export default MouseContainer;