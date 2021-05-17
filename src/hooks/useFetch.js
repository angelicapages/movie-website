import { useEffect, useState } from 'react'
import { base_url, api_key, query } from '../variables/variables'



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