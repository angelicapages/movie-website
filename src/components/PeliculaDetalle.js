import { base_url_img } from '../variables/variables'
import { useParams } from 'react-router-dom'
import useFetchDetalle from '../hooks/useFetchDetalle'
import { url_base, type_movie, api_key, language } from '../variables/variables'
import { TarjetaImg } from './style/TarjetaStyle'
import { Button } from './style/ButtonStyle'
import { ContenedorCentrado, ContenedorFondoDetalle, Overlay } from './style/ContenedoresStyle'
import { Titulo, Texto } from './style/TextoStyle'
const PeliculaDetalle = () => {
    let params = useParams();

    const paramsUrl = `${url_base}${type_movie}${params.id}?api_key=${api_key}&${language}`
    const pelicula = useFetchDetalle(paramsUrl)


    // mejor no dejar funciones como esta que no hacen nada
    const handleChange = () => {
        console.log(pelicula)
    }


    return (

        <ContenedorFondoDetalle url={`${base_url_img}${pelicula.poster_path}`}>
            <Overlay>
                <ContenedorCentrado>

                    <TarjetaImg src={`${base_url_img}${pelicula.poster_path}`} />

                    <Titulo align="left">{pelicula.original_name}{pelicula.original_title}</Titulo>
                    <Texto width="50%" align="left">{pelicula.overview}</Texto>

                    <Button onClick={handleChange} backgroundColor="#4cc9f0">
                        Trailer
                    </Button>

                </ContenedorCentrado>
            </Overlay>
        </ContenedorFondoDetalle>

    )
}

export default PeliculaDetalle
