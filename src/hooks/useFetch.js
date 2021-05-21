import { useEffect, useState } from 'react';
import { pagina } from '../variables/variables';

const useFetch = (id) => {
    const [pelicula, setPelicula] = useState([])
    useEffect(() => {
        fetch(id + pagina + 1)
            .then(res => res.json())
            .then(data => {
                setPelicula(data['results'])

            }
            )
    }, [])
    return pelicula

}

export default useFetch