import { url_ultimos_lanzamientos } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import MovieCards from './MovieCards'

const UltimosLanzamientos = () => {
    const peliculasUltimosLanzamientos = useFetch(url_ultimos_lanzamientos)
    return (
        <section>
            <h1>Ultimos lanzamientos</h1>
            <MovieCards
                peliculas={peliculasUltimosLanzamientos}
            />
        </section>
    )
}

export default UltimosLanzamientos
