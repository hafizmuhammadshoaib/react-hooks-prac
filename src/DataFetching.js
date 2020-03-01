import React, { useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Actions } from './store/Actions';

function DataFetching() {
    const [id, setId] = useState(1)
    const dispatch = useDispatch();
    const posts = useSelector(store => store?.sampleReducer?.posts)
    const fetchPost = useCallback(() => {
        dispatch(Actions.getPost(id))
    }, [dispatch, id])
    const stopReq = useCallback(() => {
        dispatch(Actions.cancelReq())
    }, [dispatch])
    useEffect(() => {
        dispatch(Actions.getPosts())
    }, [dispatch])


    return (
        <div>
            <input value={id} onChange={(e) => { setId(e.target.value) }} />
            <button onClick={fetchPost} >Fetch Post</button>
            <button onClick={stopReq} >Stop Request</button>
            <ul>
                {
                    posts.map((v, i) => {
                        return <li key={i} >{v.title}</li>
                    })
                }
            </ul>
        </div>
    )
}
export default DataFetching;