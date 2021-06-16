import { url_ultimos_lanzamientos } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'
import { ContenedorGeneral, ContenedorRow } from './style/ContenedoresStyle'
import { Titulo } from './style/TextoStyle'

const UltimosLanzamientos = () => {
    const peliculasUltimosLanzamientos = useFetch(url_ultimos_lanzamientos)
    
    return (
        <ContenedorGeneral margin="100px">
            <Titulo>Ultimos lanzamientos</Titulo>
            <ContenedorRow>
                <Tarjetas
                    peliculas={peliculasUltimosLanzamientos}
                />
            </ContenedorRow>
        </ContenedorGeneral>
    )
}

export default UltimosLanzamientos
