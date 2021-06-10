import { url_mejor_puntuadas } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'
import { ContenedorRow } from './style/ContenedoresStyle'

const MejorPuntuadas = () => {
    const peliculasMejorPuntuadas = useFetch(url_mejor_puntuadas)
    return (
        <section>
            <h1>Mejor puntuadas</h1>
            <ContenedorRow>
                <Tarjetas
                    peliculas={peliculasMejorPuntuadas}
                />
            </ContenedorRow>
        </section>
    )
}

export default MejorPuntuadas