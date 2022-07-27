import React from 'react';
import {useContext, useRef} from "react";
import mainContext from "../context/mainContext";
import CommentText from "./CommentText";
import {useNavigate} from "react-router-dom";


const Comments = ({id, comments}) => {
    const commentRef = useRef()
    const {posts, setPosts, currentUser} = useContext(mainContext)

    const nav = useNavigate()
    

    function createComment() {
        const comment = {
            username: currentUser.username,
            comment: commentRef.current.value,
           
        }

        const postIndex = posts.findIndex(x => x.id === Number(id))

        const postsCopy = [...posts]

        postsCopy[postIndex].comments.push(comment)

        setPosts(postsCopy)
        
        
    }

    return (
        <div>
            <div>
                <input ref={commentRef} type="text" placeholder="Write  messege  "/>
                <button onClick={createComment}>Send</button>
            </div>

            <div>
                {comments.map(x => <CommentText id={id} key={x.time} item={x}/>  )}
            </div>

        </div>
    );
};

export default Comments;