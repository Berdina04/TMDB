import axios from 'axios'
import React, {useContext} from 'react'
import useInput from '../hooks/useInput'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../index'

const LogIn = () => {
    
    const email = useInput('email')
    const password = useInput('password')
    const navigate = useNavigate()
    const {setUser} = useContext(UserContext)
    const { favMovie , setFavMovie} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
    
        axios
            .post('/api/login' , {
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
        <form className='section'  onSubmit={handleSubmit}>
            <div>
            <h1 class="title" style={{color:'white'}} >Please Log In!!</h1>
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
                                Log In
                        </button>
                    </p>
                </div>
            </div>
        </form>
    )
}

export default LogIn