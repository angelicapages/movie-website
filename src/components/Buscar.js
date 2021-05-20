import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from 'react'
import { url_buscar, pagina } from '../variables/variables'
import Tarjetas from './Tarjetas';

const Buscar = () => {
    const [pelicula, setPelicula] = useState([])
    const [peliculaBuscada, setpeliculaBuscada] = useState('')
    
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
            <TextField style={{ margin: 8 }} onChange={handleChange} label="Buscar" id="standard-full-width" />
            <div>
                <Tarjetas peliculas={pelicula} ></Tarjetas>
            </div>
        </section>

    )
}


export default Buscar