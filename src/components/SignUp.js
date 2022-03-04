import axios from "axios";
import React from "react";
import { useNavigate } from "react-router";
import useInput from "../hooks/useInput";


const SignUp = () => {
    
    const email = useInput("email");
    const password = useInput("password");
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        

        axios
            .post('/api/signUp' , {
                email: email.value,
                password: password.value,
            })
            .then(
                navigate('/logIn')
            )
    }

    return (
        <div>
        
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
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>
        </form>
        </div>
    )
}

export default SignUp;