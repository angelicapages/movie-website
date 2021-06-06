import { url_carrusel } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'

const Carrusel = () => {
    const peliculasCarrusel = useFetch(url_carrusel)
    return (
        <section>
            <h1>Carrusel</h1>
            <div>
                <Tarjetas
                    peliculas={peliculasCarrusel}
                />
            </div>
        </section>
    )
}

export default Carrusel
