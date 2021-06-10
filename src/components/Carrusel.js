import { url_carrusel } from '../variables/variables'
import useFetch from '../hooks/useFetch'
import { base_url_img } from '../variables/variables'
import { Link } from 'react-router-dom'
import { Button } from './style/ButtonStyle'
import { CarruselSection, CarruselImg } from './style/CarruselStyle'
import { Titulo } from "./style/TituloStyle";

const Carrusel = () => {
    const peliculasCarrusel = useFetch(url_carrusel)
    console.log(peliculasCarrusel)

    return (
        <CarruselSection>
            {peliculasCarrusel.map(pelicula => {
                return (

                    <div key={pelicula.id}>

                        <CarruselImg src={`${base_url_img}${pelicula.poster_path}`} />
                        <Titulo>{pelicula.original_name}{pelicula.original_title}</Titulo>
                        <Link to={`peliculaDetalle/${pelicula.id}`} >
                            <Button backgroundColor="#3a0ca3" color="#f1faee">
                                Ver más
                            </Button>
                        </Link>
                    </div>
                )
            })}
        </CarruselSection >
    )
}

export default Carrusel
