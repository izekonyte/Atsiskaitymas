import {useRef, useContext, useState} from 'react';
import {useNavigate} from "react-router-dom"
import mainContext from "../context/mainContext";


const RegisterPage = () => {

    const {users, setUsers} = useContext(mainContext)
     const [getError, setError] = useState(null)
    const nav = useNavigate()

    const nameRef = useRef()
    const passOneRef = useRef()
    const passTwoRef = useRef()


    function register() {
         const user = {
                username: nameRef.current.value,
                password: passOneRef.current.value,
                password2: passTwoRef.current.value,
            }
           

            if(user.username.length < 4 || user.username.length > 20) {
            
            return setError('Bad username')
        }
         if(user.password.length < 4 || user.password.length > 20) {
          return setError("Bad password it should be min 4 and  max  20 lettters with simbols ")
        }
              

        if(user.password2 !== user.password) {
          
            return setError("Passwords do not mach ")
        }
   
     const isContainsUppercase = /^(?=.*[A-Z]).*$/;
  if (!isContainsUppercase.test(user.password)) {
    return setError("Password must have at least one Uppercase Character.");
  }
   const isContainsSymbol =
    /^(?=.*[!@#$%^&*_+]).*$/;
  if (!isContainsSymbol.test(user.password)) {
    return setError("Password must contain at least one Special Symbol -!@#$%^&*_+.");
  }
         
            setError(null)
            setUsers([...users, user])
            nav("/")
        
    }


    return (
        <div className="d-flex flex-column">
          <input ref={nameRef} type="text" placeholder="username"/>
            <input ref={passOneRef} type="text" placeholder="pass 1"/>
            <input ref={passTwoRef} type="text" placeholder="pass 2"/>
                 {getError && <h1>{getError}</h1>}
            <button onClick={register}>Create user</button>
        </div>
    );
};

export default RegisterPage;