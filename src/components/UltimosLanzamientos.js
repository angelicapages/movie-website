import React, { Component } from 'react'
import { todasLasPeliculas } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import MovieCards from './MovieCards'

const UltimosLanzamientos = () => {
    const peliculasUltimosLanzamientos = useFetch(todasLasPeliculas)
    return (
        <section>
            <h1>Ultimos lanzamientos</h1>
            <MovieCards peliculas={peliculasUltimosLanzamientos} />
        </section>
    )
}

export default UltimosLanzamientos
