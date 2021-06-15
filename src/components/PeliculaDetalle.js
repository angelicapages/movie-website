import { base_url_img } from '../variables/variables'
import { useParams } from 'react-router-dom'
import useFetchDetalle from '../hooks/useFetchDetalle'
import { url_base, type_movie, api_key, language } from '../variables/variables'
import { TarjetaImg } from './style/TarjetaStyle'
import { Button } from './style/ButtonStyle'
import { ContenedorCentrado, ContenedorRow, ContenedorGeneral} from './style/ContenedoresStyle'
import { Titulo, Texto } from './style/TextoStyle'

const PeliculaDetalle = () => {
    let params = useParams();

    const paramsUrl = `${url_base}${type_movie}${params.id}?api_key=${api_key}&${language}`
    const pelicula = useFetchDetalle(paramsUrl)


    const handleChange = () => {
        console.log(pelicula)
    }


    return (
        <ContenedorCentrado>
            <ContenedorRow>
                <div>
                    <TarjetaImg src={`${base_url_img}${pelicula.poster_path}`} />
                </div>
                <ContenedorGeneral>

                    <Titulo align="left">{pelicula.original_name}{pelicula.original_title}</Titulo>
                    <Texto width="300px" align="left">{pelicula.overview}</Texto>

                    <Button onClick={handleChange} backgroundColor="#4cc9f0">
                        Trailer
                    </Button>

                </ContenedorGeneral>
            </ContenedorRow>
        </ContenedorCentrado>
    )
}

export default PeliculaDetalle