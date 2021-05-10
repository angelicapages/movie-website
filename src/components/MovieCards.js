
import React from 'react'
import { useEffect, useState } from 'react'
import './movie.css'

export default function MovieCards() {
    const [movies, setMovies] = useState([])
    const base_url = "https://image.tmdb.org/t/p/original"

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/discover/movie?api_key=f99c23308f40c1c01f9f6b78ac66fa01&with_genres=28')
            .then(res => res.json())
            .then(data => {
                setMovies(data['results'])

            }
            )
    }, [movies])

    return (
        <>
            {movies.map(movie => {
                return <div>
                    <h1>{movie['original_title']}</h1>
                    <img className='movie' src={`${base_url}${movie['poster_path']}`} />
                    <p>{movie['overview']}</p>
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

