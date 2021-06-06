import { url_mejor_puntuadas } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'

const MejorPuntuadas = () => {
    const peliculasMejorPuntuadas = useFetch(url_mejor_puntuadas)
    return (
        <section>
            <h1>Mejor puntuadas</h1>
            <div>
                <Tarjetas
                    peliculas={peliculasMejorPuntuadas}
                />
            </div>
        </section>
    )
}

export default MejorPuntuadas