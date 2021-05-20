import { url_ultimos_lanzamientos } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'

const UltimosLanzamientos = () => {
    const peliculasUltimosLanzamientos = useFetch(url_ultimos_lanzamientos)
    return (
        <section>
            <h1>Ultimos lanzamientos</h1>
            <div>
                <Tarjetas
                    peliculas={peliculasUltimosLanzamientos}
                />
            </div>
        </section>
    )
}

export default UltimosLanzamientos
