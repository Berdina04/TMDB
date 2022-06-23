import axios from 'axios'
import React from 'react'
import { useNavigate } from 'react-router'
import useInput from '../hooks/useInput'


const SignUp = () => {
    
    const email = useInput('email')
    const password = useInput('password')
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault()
        

        axios
            .post('/api/register' , {
                email: email.value,
                password: password.value,
            })
            .then(
                navigate('/logIn')
            )
    }

    return (
            <div className='section'> 
            <h1 class="title" style={{color:'white'}} >Please sign Up!!</h1>
            <form onSubmit={handleSubmit}>
                
                    <div className="field">
                        <p className="control has-icons-left has-icons-right">
                            <input className="input" type="email" placeholder="Email" {...email} />
                            <span className="icon is-small is-left">
                                <i className="fas fa-envelope"></i>
                            </span>
                            <span className="icon is-small is-right">
                                <i className="fas fa-check"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control has-icons-left">
                            <input className="input" type="password" placeholder="Password"  {...password}/>
                            <span className="icon is-small is-left">
                                <i className="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>
                    <div className="field">
                        <p className="control">
                            <button type='submit' className="button is-success">
                            Sign Up
                            </button>
                        </p>
                    </div>
               
            </form>
            </div>

    )
    
}

export default SignUp