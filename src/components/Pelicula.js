import React from 'react'
import { useEffect, useState } from 'react'
import './movie.css'


function Pelicula() {
    const [movies, setMovies] = useState([])

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


        </>
    )
}
export default Pelicula