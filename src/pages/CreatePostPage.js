import {useContext, useRef} from "react";
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";
import SinglePost from "../components/SinglePost";

const CreatePostPage = () => {
    const {posts, setPosts, currentUser} = useContext(mainContext)
    const nav = useNavigate()

    const imageRef = useRef()
    const titleRef = useRef()


    function create() {
        const post = {
            image: imageRef.current.value,
            user: currentUser.username,
            id: Date.now(),
            comments: []
        }

        setPosts([...posts, post])
        nav('/allPosts')
    }


    return (
        <div className="d-flex flex-row">
            <div className="grow1 p-10 ">
                {posts.map(x => <SinglePost key={x.id} post={x}/>)}
            </div>
            <div className="grow1 p-10 ">
               <input ref={imageRef} type="text" placeholder="upload image"/>
            <button onClick={create}>Add image</button>
            </div>

            
        </div>
    );
};

export default CreatePostPage;