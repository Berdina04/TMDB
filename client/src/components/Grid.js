import React, { useContext } from 'react'
import Card from '../commons/Card'
import { Link } from 'react-router-dom'
import { UserContext } from '..'
import { useEffect } from 'react'
import axios from 'axios'
import Navbar from './Navbar'

const Grid = (props) => {

    const { favMovie, setFavMovie } = useContext(UserContext)

    const { movies, setMovies } = useContext(UserContext)


    function probando() {
        
        if (favMovie.length > 0) {
            favMovie.forEach(fav => {
                movies.forEach(movie => {
                    if (fav.movie.id == movie.id)  movie.isAdded = true
                })
            })
        }
    }

    console.log(movies)

    return (

        <div className='section'>
            {probando()}
            <div className="columns is-multiline section">
                {
                    (movies?.length > 0
                        ? movies.map((data, i) => (

                            <div className="column is-4 my-4 " key={i}>
                                <Card movie={data} />
                            </div>
                        ))
                        : null)

                }
            </div>
        </div>
    )
}

export default Grid
