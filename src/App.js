import './App.css';
import {useState} from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import AllPostsPage from "./pages/AllPostsPage";
import CreatePostPage from "./pages/CreatePostPage";
import SinglePostPage from "./pages/SinglePostPage";
import Toolbar from "./components/Toolbar";
import CommentText from './components/CommentText';

import mainContext from "./context/mainContext";

function App() {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [currentUser, setCurrentUser] = useState(null)

    return (
        <mainContext.Provider value={{users, setUsers, posts, setPosts, currentUser, setCurrentUser}}>

            <div className="App">

                <BrowserRouter>
                    {currentUser && <Toolbar/>}

                    <Routes>
                        <Route path="/" element={<LoginPage/>}/>
                        <Route path="/register/" element={<RegisterPage/>}/>
                        <Route path="/allPosts" element={<AllPostsPage/>}/>
                        <Route path="/createPost" element={<CreatePostPage/>}/>
                        <Route path="/single/:id" element={<SinglePostPage/>}/>
                        <Route path="/CommentText" element={<CommentText/>}/>
                    </Routes>
                </BrowserRouter>
            </div>

        </mainContext.Provider>
    );
}

export default App;

