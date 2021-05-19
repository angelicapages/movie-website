import { url_populares } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'

const Populares = () => {
    const peliculasPopulares = useFetch(url_populares)
    return (
        <section>
            <h1>Películas Populares</h1>
            <Tarjetas peliculas={peliculasPopulares} />
        </section>
    )
}

export default Populares