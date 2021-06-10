import { base_url_img } from '../variables/variables'
import { useParams } from 'react-router-dom'
import useFetchDetalle from '../hooks/useFetchDetalle'
import { url_base, type_movie, api_key, language } from '../variables/variables'
import { TarjetaImg } from './style/TarjetaStyle'
import {Button} from './style/ButtonStyle'

const PeliculaDetalle = () => {
    let params = useParams();

    const paramsUrl = `${url_base}${type_movie}${params.id}?api_key=${api_key}&${language}`
    const pelicula = useFetchDetalle(paramsUrl)


    const handleChange = () => {
        console.log(pelicula)
    }


    return (
        <>
            <section>
                <div>
                    <h1>{pelicula.original_name}{pelicula.original_title}</h1>
                    <p>{pelicula.overview}</p>
                    <div>
                        <TarjetaImg src={`${base_url_img}${pelicula.poster_path}`} />
                    </div>
                    <Button onClick={handleChange} backgroundColor="#4cc9f0">
                        Trailer
                    </Button>
                </div>
            </section>
        </>

    )
}

export default PeliculaDetalle