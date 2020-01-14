import React, { useState, useEffect } from 'react';

function HookCounter() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('')
    useEffect(() => {
        console.log("on count updated")
        document.title = `You clicked ${count} times`
    }, [count])
    useEffect(() => {
        console.log("on name updated")
    }, [name])
    return (
        <div>
            <input value={name} onChange={(e) => { setName(e.target.value) }} />
            <button onClick={() => setCount(count + 1)} >Click {count}</button>
        </div>
    )
}
export default HookCounter;