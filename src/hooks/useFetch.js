import { useEffect, useState } from 'react'

export default function useFetch(id) {
    const [pelicula, setPelicula] = useState([])
    useEffect(() => {
        fetch(id)
            .then(res => res.json())
            .then(data => {
                setPelicula(data['results'])
            }
            )
    }, [])
    return pelicula

}