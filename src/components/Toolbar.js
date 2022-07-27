import {Link, useNavigate} from "react-router-dom";
import {useContext} from "react";
import mainContext from "../context/mainContext";

const Toolbar = () => {
    const nav = useNavigate()
    const { setCurrentUser} = useContext(mainContext)

    function logout() {
        setCurrentUser(null)
        nav("/register")
    }

    return (
        <div className="toolbar d-flex  space-btw" >
            <Link to="/createPost">Create</Link>
            <Link to="/allPosts">All posts</Link>
            
          

            <button onClick={logout}>Logout</button>
        </div>
    );
};

export default Toolbar;