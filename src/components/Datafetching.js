import React, { useState,useEffect } from 'react'

function DataFetching () {
    const [post,setPost] = useState({})
    
    const [id, setId] = useState(1);
    const url = `http://jsonplaceholder.typicode.com/posts/${id}`
    
    useEffect(()=> {
        fetch(url)
            .then(response => response.json())
            .then(res => setPost(res));
    }, [id])
    
    return ( 
        <div>
            <input type="text" value={id} onChange={e=>setId(e.target.value)} />
            <div>
                <p>
                ID: {post.id}, 
                </p>
            <p>Title: {post.title},</p> 
            <p>Body: {post.body},</p> 
            <p>UserId: {post.userId} </p> 
            
            </div>
        </div>
    )
}
export default DataFetching