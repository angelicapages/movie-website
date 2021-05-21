import { useEffect, useState } from 'react'
import { url_populares, pagina } from '../variables/variables'
import useFetch from '../hooks/useFetch'

const BotonesCambioDePagina = () => {

    const [numeroDePagina, setnumeroDePagina] = useState(1)

    const peliculasPopulares = useFetch(url_populares + pagina + numeroDePagina)

    const handleChange = e => {
        console.log(e.target.value)
        setnumeroDePagina(e.target.value + 1);
    };

    return <button onClick={handleChange} value={1}>Siguiente</button>
}

export default BotonesCambioDePagina