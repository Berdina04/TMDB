import axios from 'axios'
import React, { useContext } from 'react'
import { UserContext } from '..'
import { Link } from 'react-router-dom'
import { use } from 'passport'
import { useState } from 'react'
import { useEffect } from 'react'


const Card = ({ movie }) => {

    const { user } = useContext(UserContext)
    const { setFavs } = useContext(UserContext)
    const { setMovie } = useContext(UserContext)
    const [validateButton, setValidateButton] = useState(false)


    const addFav = (e) => {
        e.preventDefault()
        axios
            .post('/api/addFavorite', {
                userId: user.id,
                movieId : movie.id,
                movie: movie,
                isAdded: true
            })
            .then(res => setFavs(res))
            .then(() => setValidateButton(true))
    }
    const deleteFav = (e) => {
        e.preventDefault()
        axios
            .delete(`/api/deleteFavorite/${user.id}/${movie.id} `)
            .then(() => setValidateButton(false))
            .then(() =>  {
                setFavs()
                movie.isAdded = false
            } )
            
    }
    const seeDetails = (movie) => {

        axios
            .get(`https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=dc9be762591d283643db6e62a4f3a11f`)
            .then(video => movie.video = video)
            .then(() => setMovie(movie))

    }
    const isFavorite = () => {
        console.log('estos son los estados' , movie.isAdded , validateButton)
        if (movie.isAdded || validateButton) {
            return (
                <button onClick={deleteFav}
                    className="button is-danger is-light is-medium is-rounded mb-2 is-4">Delete of favorites
                </button>
            )
        }
        else {
            return (
                <button onClick={addFav}
                    className="button is-success is-light is-medium is-rounded mb-2 is-4">Add to favorites
                </button>
            )
        }
    }
    useEffect(() => {
        isFavorite

    }, [validateButton])




    const img = 'https://image.tmdb.org/t/p/original/'
    return (

        <div className="card middle">
            <div className="front">
                <img src={img + movie.poster_path} alt="Placeholder image" />
            </div>
            <div className="back">
                <div className="back-content middle">
                    <p className="title ">{movie.title}</p>
                    <time >{movie.release_date}</time>
                    <div className='text-overview'>{movie.overview}</div>
                    <br />
                    <Link to='/details'>
                        <button className="button is-warning is-light is-medium is-rounded mb-2 is-4" onClick={() => seeDetails(movie)}>
                            Know More..
                        </button>
                    </Link>
                    {
                        user.id ? isFavorite() : null
                        
                    }


                </div>
            </div>
        </div>
    )
}

export default Card