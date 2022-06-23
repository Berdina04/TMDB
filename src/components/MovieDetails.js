import React from 'react'
import { useContext } from 'react'
import { UserContext } from '..'
import CardDetail from '../commons/CardDetail'
const details = () => {
    
    const {movie} = useContext(UserContext)
    
    return (
        <div className="container">
            <div className="column is-4 my-4 ">
                <CardDetail movie={movie} />
            </div>
        </div>
    )
}

export default details