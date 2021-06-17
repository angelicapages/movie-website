import { useState } from 'react'
import { url_carrusel } from "../variables/variables";
import useFetch from "../hooks/useFetch";
import { base_url_img } from "../variables/variables";
import { Link } from "react-router-dom";
import { Button } from "./style/ButtonStyle";
import { CarruselSection, CarruselImg, ContenedorDeFlecha } from "./style/CarruselStyle";
import { Titulo, Texto } from "./style/TextoStyle";
import theme from "./style/Theme";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import { ContenedorCentrado, Overlay, ContenedorDeTexto } from "./style/ContenedoresStyle";

const Carrusel = () => {
    const [actualSlide, setActualSlide] = useState(0)
    const peliculasCarrusel = useFetch(url_carrusel);
    let longitud = peliculasCarrusel.length


    const siguienteSlide = () => {
        setActualSlide(actualSlide === longitud - 1 ? 0 : actualSlide + 1)
        console.log(actualSlide)
    }
    const anteriorSlide = () => {
        setActualSlide(actualSlide === 0 ? longitud - 1 : actualSlide - 1)
        console.log(actualSlide)
    }

    return (

        <CarruselSection>

            {peliculasCarrusel.map((pelicula, index) =>

                <article key={pelicula.id}>
                    <CarruselImg estado={index === actualSlide ? true : false} url={`${base_url_img}${pelicula.poster_path}`}>
                        <Overlay>
                            <ContenedorDeFlecha onClick={anteriorSlide}>
                                <MdKeyboardArrowLeft />
                            </ContenedorDeFlecha>
                            <ContenedorDeTexto>
                                <ContenedorCentrado>
                                    <Titulo width="auto" align="center">
                                        {pelicula.original_name}
                                        {pelicula.original_title}
                                    </Titulo>

                                    <Texto align="center" width="400px">
                                        {pelicula.overview}
                                    </Texto>

                                    <ContenedorCentrado>
                                        <Link
                                            to={`peliculaDetalle/${pelicula.id}`}
                                            style={{ textDecoration: "none", color: "white" }}
                                        >
                                            <Button
                                                backgroundColor={theme.colors.background}
                                                color={theme.colors.text}
                                            >
                                                Ver más
                                            </Button>
                                        </Link>
                                    </ContenedorCentrado>
                                </ContenedorCentrado>
                            </ContenedorDeTexto>

                            <ContenedorDeFlecha  onClick={siguienteSlide}>
                                <MdKeyboardArrowRight />
                            </ContenedorDeFlecha>
                        </Overlay>
                    </CarruselImg>
                </article>
            )}

        </CarruselSection>
    )
}

export default Carrusel;