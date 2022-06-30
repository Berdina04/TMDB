import React from 'react'
import axios from 'axios'
import Card from '../commons/Card'
import { useContext } from 'react'
import { UserContext } from '..'



const GridFavs = () => {

    const { favMovie } = useContext(UserContext)


    return (
        <div className='section'>
            <div className="columns is-multiline section ">
                {
                    (favMovie.map((data, i) => (

                        <div className="column is-4 my-4 " key={i} >
                            <Card movie={data.movie} />
                        </div>
                    ))
                    )
                }
            </div>
        </div>
    )
}

export default GridFavs