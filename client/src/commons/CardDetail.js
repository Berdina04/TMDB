
import React from 'react'


const cardDetail = ({ movie }) => {

    const img = 'https://image.tmdb.org/t/p/original/'
    return (
        <div className='section is-flex'>
            <div>
                <img id='cardImg' src={img + movie.poster_path} alt="Placeholder image" />

            </div>
            <div style={{padding:60}}>
                <div>
                    <h1 style={{fontSize:27 , color:'yellow'}}>{movie.title}</h1>
                </div>
                <br></br>
               <p style={{fontSize:17 , color:'white'}}> {movie.overview}</p>
            </div>

        </div>
    )
}

export default cardDetail