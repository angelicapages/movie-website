import { url_populares } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'
import { ContenedorRow } from './style/ContenedoresStyle'

const Populares = () => {
    const peliculasPopulares = useFetch(url_populares)
    return (
        <section>
            <h1>Películas Populares</h1>
            <ContenedorRow>
                <Tarjetas peliculas={peliculasPopulares} />
            </ContenedorRow>
        </section>
    )
}

export default Populares