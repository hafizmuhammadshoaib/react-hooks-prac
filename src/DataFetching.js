import React, { useEffect, useState } from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState({})
    const [id, setId] = useState(1)
    const [idFromButtonClick,setIdFromButtonClick] = useState(1);
    const onButtonClick = ()=>{
        setIdFromButtonClick(id)
    }
    useEffect(() => {
        if (idFromButtonClick) {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${idFromButtonClick}`).then((res) => {
                console.log(res)
                setPost(res.data)
            }).catch(err => {
                console.log("err", err)
            })
        }
    }, [idFromButtonClick])

    return (
        <div>
            <input value={id} onChange={(e) => { setId(e.target.value) }} />
            <button onClick={onButtonClick} >Fetch Post</button>
            {/* <ul>
                {
                    posts.map((v, i) => {
                        return <li key={i} >{v.title}</li>
                    })
                }
            </ul> */}
            <p>{post.title}</p>
        </div>
    )
}
export default DataFetching;