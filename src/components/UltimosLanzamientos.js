import { url_ultimos_lanzamientos } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'
import { ContenedorRow } from './style/ContenedoresStyle'

const UltimosLanzamientos = () => {
    const peliculasUltimosLanzamientos = useFetch(url_ultimos_lanzamientos)
    return (
        <section>
            <h1>Ultimos lanzamientos</h1>
            <ContenedorRow>
                <Tarjetas
                    peliculas={peliculasUltimosLanzamientos}
                />
            </ContenedorRow>
        </section>
    )
}

export default UltimosLanzamientos
