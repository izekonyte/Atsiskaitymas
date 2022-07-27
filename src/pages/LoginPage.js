import {useContext, useRef, useState} from "react";
import mainContext from "../context/mainContext";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
 const {users, setCurrentUser} = useContext(mainContext)
       const [getError, setError] = useState(null)
    const nav = useNavigate()

    const nameRef = useRef()
    const passOneRef = useRef()


    function login() {
        const user = {
            username: nameRef.current.value,
            password: passOneRef.current.value
        }

        const userAuth = users.find(x => x.username === user.username && x.password === user.password)
 

        if(userAuth) {
            setError(null)
            setCurrentUser(userAuth)
            nav('/createPost')
        } 
          if (userAuth !== user) {
    return setError("Invalid user name or password");
  }
    }


    return (
        <div className="d-flex flex-column">
            <input ref={nameRef} type="text" placeholder="username"/>
            <input ref={passOneRef} type="text" placeholder="password"/>
            {getError && <h1>{getError}</h1>}
            <button onClick={login}>Log in</button>
        </div>
    );
};
export default LoginPage;