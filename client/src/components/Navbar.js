import axios from 'axios'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../index'
import { useNavigate } from 'react-router'
import { useEffect } from 'react'

const Navbar = () => {
    const [value, setValue] = useState('')
    const { movies, setMovies } = useContext(UserContext)
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)
    const { favMovie } = useContext(UserContext)
    const {setToken} = useContext(UserContext)


    const handleOnChange = (e) => {
        e.preventDefault()

        setValue(e.target.value)


    }

    let moviesTemp

    useEffect(() => {
        console.log(value)
        if (value !== '') moviesTemp = `https://api.themoviedb.org/3/search/movie?api_key=dc9be762591d283643db6e62a4f3a11f&query=${value}`

        else moviesTemp = 'https://api.themoviedb.org/3/movie/popular?api_key=dc9be762591d283643db6e62a4f3a11f'

        axios
            .get(moviesTemp)
            .then(res => res.data)
            .then(moviesSearched => setMovies(moviesSearched.results)
            )

    }, [value])


    const handleLogout = (e) => {
        e.preventDefault()

        setUser({})
        setToken('')
        localStorage.removeItem('token')
        navigate('/')
    }


    return (
        <div className='section'>
            <nav>
                <div className="logo"> Movie Brand</div>
                <input type="checkbox" id="click" />
                <label htmlFor="click" className="menu-btn">
                    <i className="fas fa-bars"></i>
                </label>

                <ul>
                    <li> <input onChange={(e) => handleOnChange(e)} className="input " type="text" placeholder="Search Movie"></input></li>
                    <li>
                        <Link to='/'>
                            <a >
                                Home
                            </a>
                        </Link>
                    </li>

                    {user.id
                        ?
                        <>
                            <li>
                                <Link to='/favs'>
                                    <a>
                                        Favorites
                                    </a>
                                </Link>
                            </li>
                            <li>
                                <Link to="/">
                                    <a onClick={handleLogout} >
                                        <strong>Log Out</strong>
                                    </a>
                                </Link>
                            </li>
                        </>
                        : <li>
                            <Link to="signUp">
                                <a >
                                    <strong>Sign up</strong>
                                </a>
                            </Link>
                            <Link to="logIn">
                                <a >
                                    <strong>Log in</strong>
                                </a>
                            </Link>

                        </li>
                    }

                </ul>
            </nav>
        </div>

    )
}

export default Navbar
