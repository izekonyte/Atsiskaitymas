import {useContext} from "react";
import mainContext from "../context/mainContext";
import SinglePost from "../components/SinglePost";

const AllPostsPage = () => {
    const {posts} = useContext(mainContext)

    return (
        <div className="d-flex flex-wrap ">
            {posts.map(x => <SinglePost key={x.id} post={x}/>)}
        </div>
    );
};

export default AllPostsPage;