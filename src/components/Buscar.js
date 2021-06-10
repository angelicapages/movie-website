
import Tarjetas from './Tarjetas';
import { url_buscar, pagina } from '../variables/variables'
import { useEffect, useState } from 'react'
import {ContenedorRow} from './style/ContenedoresStyle'

const Buscar = () => {

    const [peliculaBuscada, setpeliculaBuscada] = useState('')
    const [pelicula, setPelicula] = useState([])

    const handleChange = e => {
        console.log(e.target.value)
        setpeliculaBuscada(e.target.value);

    };

    useEffect(() => {
        fetch(url_buscar + peliculaBuscada + pagina)
            .then(res => res.json())
            .then(data => {
                setPelicula(data.results);
            });
        return pelicula
    }, [peliculaBuscada]);

    return (

        <section>
            <input onChange={handleChange} label="Buscar" />
            <ContenedorRow>
                {pelicula &&
                    <Tarjetas peliculas={pelicula} ></Tarjetas>
                }
            </ContenedorRow>
        </section>

    )
}


export default Buscar