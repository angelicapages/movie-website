import { base_url_img } from '../variables/variables'
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useParams } from 'react-router-dom'
import useFetchDetalle from '../hooks/useFetchDetalle'
import { url_base, type_movie, api_key, language } from '../variables/variables'
import Trailer from './Trailer'

const PeliculaDetalle = () => {
    let params = useParams();

    const urlTarjeta = `${url_base}${type_movie}${params.id}?api_key=${api_key}&${language}`
    const urlVideo = `${url_base}${type_movie}${params.id}/videos?api_key=${api_key}&${language}`
    const video = useFetchDetalle(urlVideo)
    const pelicula = useFetchDetalle(urlTarjeta)

    const handleChange = () => {
        return (<Trailer
            video={video}
        />)
    }


    return (
        <>
            <Card>
                <CardContent>
                    <h1>{pelicula.original_name}{pelicula.original_title}</h1>
                    <p>{pelicula.overview}</p>
                    <CardMedia>
                        <img src={`${base_url_img}${pelicula.poster_path}`} />
                    </CardMedia>
                    <button onClick={handleChange}>
                        Trailer
                    </button>
                </CardContent>
            </Card>
        </>

    )
}

export default PeliculaDetalle