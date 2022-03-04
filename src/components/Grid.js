import React from "react";
import axios from "axios";
import Card from '../commons/Card'



const Grid = (props) => {


    
    return (
        <div className="container">
            <div className="columns is-multiline section ">
                {
                 (props.movies.length > 0 ? props.movies.map((data, i) => (
                    <div className="column is-4 my-4 " key={i}>
                        <Card movie={data} />
                    </div>
                )) : null) 
               
                }
            </div>
        </div>
    )
}

export default Grid;