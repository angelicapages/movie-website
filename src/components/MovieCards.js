import { Link } from 'react-router-dom'
import React from 'react'
import './movie.css'
import {base_url_img} from '../variables/variables'

export default function MovieCards(peliculas) {


    return (
        <>
            {peliculas.map(pelicula => {          
                return <div>
                    <Link to={`pelicula/${pelicula['id']}`}>
                        <h1>{pelicula['original_title']}</h1>
                        <img src={`${base_url_img}${pelicula['poster_path']}`} />
                    </Link>
                    <p>{pelicula['overview']}</p>
                </div>
            })}

        </>
    )
}

// const MovieCards = Texto => (

//     return 

//     <div>
//       <h1>{Texto}</h1>
//     </div>
//   )

//   export default MovieCards 

