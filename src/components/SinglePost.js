import React from 'react';
import {useNavigate} from "react-router-dom";

const SinglePost = ({post}) => {
    const nav = useNavigate()

    return (
        <div className="post mb-10" onClick={() => nav("/single/"+post.id)}>
            <img src={post.image} alt=""/>
            <div>User: {post.user}</div>
           
        </div>
    );
};

export default SinglePost;