import { url_carrusel } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import { base_url_img } from '../variables/variables'
import { Link } from 'react-router-dom'
import { Button } from './style/ButtonStyle'
import { CarruselSection, CarruselImg } from './style/CarruselStyle'
import { Titulo } from "./style/TituloStyle";
import theme from './style/Theme'
import Slider from 'infinite-react-carousel'

const Carrusel = () => {
    const peliculasCarrusel = useFetch(url_carrusel)
    console.log(peliculasCarrusel)

    return (
        <CarruselSection>
            {peliculasCarrusel.map(pelicula => {
                return (

                    <Slider key={pelicula.id}>

                        <CarruselImg src={`${base_url_img}${pelicula.poster_path}`} />
                        <Titulo>{pelicula.original_name}{pelicula.original_title}</Titulo>
                        <Link to={`peliculaDetalle/${pelicula.id}`} >
                            <p>{pelicula.overview}</p>
                            <Button backgroundColor={theme.colors.background} color={theme.colors.text}>
                                Ver más
                            </Button>
                        </Link>
                    </Slider>
                )
            })}
        </CarruselSection >
    )
}

export default Carrusel
