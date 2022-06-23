import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div>
            <h1 className='container section'> User Not Found</h1>
            <Link to='/logIn'>
                <button className="button is-primary is-outlined" >
                    <strong>Back to logIn</strong>
                </button>
            </Link>
        </div>


    )
}

export default NotFound