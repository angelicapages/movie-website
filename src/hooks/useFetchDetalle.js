import { useEffect, useState } from 'react'

const useFetchDetalle=(param)=> {
    // la pelicula va a ser un objeto, no un array! 
    const [pelicula, setPelicula] = useState([])
    useEffect(() => {
        fetch(param)
            .then(res => res.json())
            .then(data => {
                setPelicula(data)
            }
            )
    }, [])
    return pelicula

}

export default useFetchDetalle
