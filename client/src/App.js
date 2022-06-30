import React from 'react'
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { useEffect, useState, useContext } from 'react'
import axios from 'axios'
import { Route, Routes } from 'react-router'
import SignUp from './components/SignUp'
import LogIn from './components/LogIn'
import NotFound from './commons/NotFound'
import { UserContext } from '.'
import GridFavs from './components/GridFavs'
import CardDetail from './commons/CardDetail'

const App = () => {


    const {user, setUser } = useContext(UserContext)
    const {favs} = useContext(UserContext)
    const { movie } = useContext(UserContext)
    const { favMovie , setFavMovie} = useContext(UserContext)
    const {token} = useContext(UserContext)

    useEffect(() => {
        axios
            .get('/api/me' , {
                headers: {
                    authorization : localStorage.getItem('token')
                }
            })
            .then(res =>  res.data)
            .then(data => setUser(data))
            .catch(err => console.error(err))
            
    }, [token])

    useEffect(() => {
        if(user.id) {
            axios
            .get(`/api/addFavorites/${user.id}`)
            .then(res => setFavMovie(res.data))
        }
    }, [user , favs])


    return (
        <div>

            <Navbar />
            <div >
                <Routes>
                    <Route path='/' element={<Grid></Grid>}></Route>
                    <Route path="404" element={<NotFound />} />
                    <Route path='/signUp' element={<SignUp></SignUp>}></Route>
                    <Route path='/logIn' element={<LogIn></LogIn>}></Route>
                    <Route path='/favs' element={<GridFavs></GridFavs>}></Route>
                    <Route path='/details' element={<CardDetail movie={movie} ></CardDetail>}></Route>
                </Routes>
            </div>

        </div>
    )
}

export default App