import React, { useState, useEffect } from 'react';

function HookMouse() {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const mouseListener = (e) => {
        console.log(e.clientX,e.clientY)
        setX(e.clientX);
        setY(e.clientY);
    }
    useEffect(() => {
        window.addEventListener('mousemove', mouseListener)
        return function cleanListener(){
            console.log("clean called")
            window.removeEventListener('mousemove',mouseListener)
        }
    }, [])

    return (
        <div>
            Hooks X - {x} Y - {y}
        </div>
    )
}
export default HookMouse;