import { url_populares } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'
import { ContenedorRow, ContenedorGeneral } from './style/ContenedoresStyle'
import { Titulo } from './style/TextoStyle'

const Populares = () => {
    const peliculasPopulares = useFetch(url_populares)
    return (
        <ContenedorGeneral margin="100px">
            <Titulo>Películas Populares</Titulo>
            <ContenedorRow>
                <Tarjetas peliculas={peliculasPopulares} />
            </ContenedorRow>
        </ContenedorGeneral>
    )
}

export default Populares