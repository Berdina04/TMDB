import axios from "axios";
import React, { useContext } from "react";
import { UserContext } from "..";



const Card = ({ movie }) => {
    const { user } = useContext(UserContext)

    const addFav = (e) => {
        e.preventDefault()
       
        axios
            .post('/api/addFavorite', {
                userId : user.id,
                movie: movie.title
            })

    }

    const img = 'https://image.tmdb.org/t/p/original/'
    return (
        <div class=" card my-auto">
            <div class="card-image">
                <figure class="image is-4by4">
                    <img src={img + movie.poster_path} alt="Placeholder image" />
                </figure>
            </div>
            <div class="card-content">
                <div class="media">

                    <div class="media-content">
                        <p class="title is-4">{movie.title}</p>
                        {user.id ? <button onClick={addFav}
                            class="button is-success is-light is-small is-rounded mb-2 is-4">Add to favorites</button> : null}
                        <br />

                        <time >{movie.release_date}</time>
                    </div>
                </div>

                <div class="content">
                    {movie.overview}
                    <div></div>

                </div>
            </div>
        </div>
    )
}

export default Card;