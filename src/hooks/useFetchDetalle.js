import { useEffect, useState } from 'react'

const useFetchDetalle=(param)=> {
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