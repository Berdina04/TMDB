import axios from "axios";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import Grid from '../components/Grid'
import { UserContext } from '../index'
import { useNavigate } from "react-router";

const Navbar = () => {

    const [value, setValue] = useState('');
    const [moviesSearched, setMovieSearched] = useState([])
    const navigate = useNavigate()
    const { user, setUser } = useContext(UserContext)

    const handleOnChange = (e) => {
        e.preventDefault()
        setValue(e.target.value);

        axios
            .get(`https://api.themoviedb.org/3/search/movie?api_key=dc9be762591d283643db6e62a4f3a11f&query=${value}`)
            .then(res => res.data)
            .then(moviesSearched => setMovieSearched(moviesSearched.results))
    }

    const handleLogout = (e) => {
        e.preventDefault()
        axios
            .get('/api/logOut')
            .then(setUser({}))
            .then(navigate('/'))
    }

    return (
        <div>
            <div>
                <nav class="navbar is-tab is-fixed-top is-spaced is-link my-auto navbar" role="navigation" aria-label="main navigation">
                    <div class="navbar-brand">
                        <a class="navbar-item">
                            MovieCamp
                        </a>

                        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </a>
                    </div>

                    <div id="navbarBasicExample" class="navbar-menu">
                        <div class="navbar-start">
                            <Link to='/'>
                                <a class="navbar-item ">
                                    Home
                                </a>
                            </Link>
                            <div class="navbar-item ">
                            <Link to='/favs'>
                                <a class="navbar-item">
                                    Favorites
                                </a>
                            </Link>



                            </div>

                            <input onChange={handleOnChange} class="input" type="text" placeholder="Search Movie"></input>

                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">

                                <div class="buttons">
                                    {user.id ?
                                        <Link to="/">
                                            <button onClick={handleLogout} class="button is-primary mr-3" >

                                                <strong>Log Out</strong>

                                            </button>
                                        </Link>
                                        :
                                        <div>
                                            <Link to="signUp">
                                                <button class="button is-primary mr-3" >

                                                    <strong>Sign up</strong>

                                                </button>
                                            </Link>
                                            <Link to="logIn">
                                                <button class="button is-primary is-outlined" >

                                                    <strong>Log in</strong>

                                                </button>
                                            </Link>

                                        </div>
                                    }

                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
            </div>
            <Grid movies={moviesSearched}></Grid>
        </div>
    )
}

export default Navbar;