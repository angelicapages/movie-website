import { url_mejor_puntuadas } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'
import { ContenedorRow, ContenedorGeneral } from './style/ContenedoresStyle'

const MejorPuntuadas = () => {
    const peliculasMejorPuntuadas = useFetch(url_mejor_puntuadas)
    return (
        <ContenedorGeneral margin="100px">
            <h1>Mejor puntuadas</h1>
            <ContenedorRow>
                <Tarjetas
                    peliculas={peliculasMejorPuntuadas}
                />
            </ContenedorRow>
        </ContenedorGeneral>
    )
}

export default MejorPuntuadas