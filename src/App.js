
import Navbar from './components/Navbar'
import Grid from './components/Grid'
import { useEffect, useState , useContext} from 'react'
import axios from "axios";
import { Route, Routes } from 'react-router';
import SignUp from './components/SignUp';
import LogIn from './components/LogIn';
import NotFound from './commons/NotFound';
import { UserContext } from '.';
import GridFavs from './components/GridFavs';


const App = () => {

    const [movies, setMovies] = useState([])
    const { setUser , favs, setFavs } = useContext(UserContext);
    const apiTMDB = 'https://api.themoviedb.org/3/movie/popular?api_key=dc9be762591d283643db6e62a4f3a11f&language=en-US'

    useEffect(() => {
        axios
            .get(apiTMDB)
            .then(res => res.data)
            .then(movies => setMovies(movies.results))
        axios
            .get('/api/me')
            .then(res => res.data)
            .then(user => {
                setUser(user)
            })
            
    }, [])


    return (
        <div>
            
                <Navbar />
                <div className="container ">
                    <Routes>
                        <Route path='/' element={<Grid movies={movies}></Grid>}></Route>
                        <Route path="404" element={<NotFound />} />
                        <Route path='/signUp' element={<SignUp></SignUp>}></Route>
                        <Route path='/logIn' element={<LogIn></LogIn>}></Route>
                        <Route path='/favs' element={<GridFavs></GridFavs>}></Route>
                    </Routes>
                </div>
           

        </div>
    )
}

export default App;