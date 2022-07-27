import {useContext} from "react";
import mainContext from "../context/mainContext";

const CommentText = ({item, id}) => {
    const {posts, currentUser, setPosts} = useContext(mainContext)

  

    return (
        <div className="d-flex ">
            <div><b>{item.username}: </b></div> 
            <div>{item.comment}</div>
            
            
        </div>
    );
};

export default CommentText;