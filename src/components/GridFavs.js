import React from "react";
import axios from "axios";
import Card from '../commons/Card'
import { useContext } from "react";
import { UserContext } from "..";


const GridFavs = () => {
    
    const {favs , setFavs} = useContext(UserContext)

    const getFavs = (e) => {
        e.preventDefault()
        console.log('estoy en la funcion')
        axios
            .get('/api/addFavorites')
            .then(res => res.data)
            .then(data =>
                console.log(data))
    }
    console.log(favs)
    
    return (
        <div className="container">
            <div className="columns is-multiline section ">
                {
                 (favs.length > 0 ? favs.map((data, i) => (
                    <div className="column is-4 my-4 " key={i}>
                        <Card movie={data} />
                    </div>
                )) : getFavs) 
               
                }
            </div>
        </div>
    )
}

export default GridFavs;