import { base_url_img } from '../variables/variables'
import { useState } from "react";
import { useParams } from 'react-router-dom'
import useFetchDetalle from '../hooks/useFetchDetalle'
import { url_base, type_movie, api_key, language } from '../variables/variables'
import Trailer from './Trailer'
import { TarjetaImg } from './style/TarjetaStyle'
import { Button } from './style/ButtonStyle'
import { ContenedorCentrado, ContenedorRow, ContenedorGeneral} from './style/ContenedoresStyle'
import { Titulo, Texto } from './style/TextoStyle'

const PeliculaDetalle = () => {
   
    const [showVideo, setShowVideo] = useState(false);
    let params = useParams();

    const urlTarjeta = `${url_base}${type_movie}${params.id}?api_key=${api_key}&${language}`
    const urlVideo = `${url_base}${type_movie}${params.id}/videos?api_key=${api_key}&${language}`
    const video = useFetchDetalle(urlVideo)
    const pelicula = useFetchDetalle(urlTarjeta)

    const handleChange = () => {
        setShowVideo(true);
      };


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
                    {showVideo && <Trailer video={video} />}
                </ContenedorGeneral>
            </ContenedorRow>
        </ContenedorCentrado>
    )
}

export default PeliculaDetalle