import {useContext, useRef} from "react";
import mainContext from "../context/mainContext";
import {useParams} from "react-router-dom";
import Comments from "../components/Comments";


const SinglePostPage = () => {

    const {id} = useParams()

    const {posts} = useContext(mainContext)


    const myPost = posts.find(x => x.id === Number(id))
 
    return (

        <div>
            <div className="d-flex  post1">
                <div className="grow1">
                    <img  src={myPost.image} alt=""/>
                </div>
                <div className="grow1 ">
                   
                    <div>User: {myPost.user}</div>
                       <div>Meseges: {myPost.comments.length}</div>
                </div>
            </div>
          

            <Comments id={id} comments={myPost.comments}/>
        </div>

    );
};

export default SinglePostPage;