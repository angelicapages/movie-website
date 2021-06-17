import { url_ultimos_lanzamientos } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import Tarjetas from './Tarjetas'
import { ContenedorGeneral, ContenedorRow, ContenedorCentrado } from './style/ContenedoresStyle'
import { Titulo } from './style/TextoStyle'

const UltimosLanzamientos = () => {
    const peliculasUltimosLanzamientos = useFetch(url_ultimos_lanzamientos)
    
    return (
        <ContenedorGeneral margin="100px">
            <Titulo>Ultimos lanzamientos</Titulo>
            <ContenedorRow>
                <ContenedorCentrado>
                <Tarjetas
                    peliculas={peliculasUltimosLanzamientos}
                />
                </ContenedorCentrado>
            </ContenedorRow>
        </ContenedorGeneral>
    )
}

export default UltimosLanzamientos
