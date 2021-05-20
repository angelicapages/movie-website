import { useEffect, useState } from 'react'

const useFetch=(id)=> {
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

export default useFetch