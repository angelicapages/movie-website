import { useEffect, useState } from 'react'

const useFetch=(param)=> {
    const [pelicula, setPelicula] = useState([])
    useEffect(() => {
        fetch(param)
            .then(res => res.json())
            .then(data => {
                setPelicula(data['results'])
            }
            )
    }, [])
    return pelicula

}

export default useFetch