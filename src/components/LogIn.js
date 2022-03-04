import axios from "axios";
import React, {useContext} from "react";
import useInput from "../hooks/useInput";
import { useNavigate } from "react-router-dom"
import { UserContext } from "../index";

const LogIn = () => {
    
    const email = useInput("email");
    const password = useInput("password");
    const navigate = useNavigate();
    const {setUser} = useContext(UserContext)


    const handleSubmit = (e) => {
        e.preventDefault()
    
        axios
            .post('/api/LogIn' , {
                email: email.value,
                password: password.value,
            })
            .then( res => res.data)
            .then( data => { 
                if(data) {
                    setUser(data)
                    navigate('/') 
                } 
            })
            .catch(()=> navigate('/404'))
         
       
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="container my-4 section ">
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <input class="input" type="email" placeholder="Email" {...email} />
                        <span class="icon is-small is-left">
                            <i class="fas fa-envelope"></i>
                        </span>
                        <span class="icon is-small is-right">
                            <i class="fas fa-check"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control has-icons-left">
                        <input class="input" type="password" placeholder="Password"  {...password}/>
                        <span class="icon is-small is-left">
                            <i class="fas fa-lock"></i>
                        </span>
                    </p>
                </div>
                <div class="field">
                    <p class="control">
                        
                            <button type='submit' class="button is-success">
                                Log In
                            </button>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default LogIn;