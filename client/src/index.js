import React, { useState, createContext } from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import 'bulma/css/bulma.min.css'
import { BrowserRouter } from 'react-router-dom'

export const UserContext = createContext()

const Root = () => {
    const [user, setUser] = useState({})
    const [favs, setFavs] = useState([])
    const [movie, setMovie] = useState({})
    const [movies, setMovies] = useState([])
    const [favMovie, setFavMovie] = useState([])
    const [token , setToken] = useState('')

    return (
        <BrowserRouter>
            <UserContext.Provider value={{ user, setUser, favs, setFavs, movie, setMovie , movies, setMovies , favMovie, setFavMovie, token , setToken}}>
                <App />
            </UserContext.Provider>
        </BrowserRouter>
    )
}

export default ReactDOM.render(<Root/>, document.getElementById('root'))
