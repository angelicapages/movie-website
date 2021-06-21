import { useEffect, useState } from 'react'

const useFetch=(param)=> {
    const [pelicula, setPelicula] = useState([])
    useEffect(() => {
        fetch(param)
            .then(res => res.json())
            .then(data => {
                // a menos que estes usando una variable, usa la 
                // sintaxis clasica de propiedades de objeto: setPelicula(data.results)
                setPelicula(data['results'])
            }
            )
    }, [])
    return pelicula

}

export default useFetch
