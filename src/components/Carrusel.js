import { url_carrusel } from "../variables/variables";
import useFetch from "../hooks/useFetch";
import { base_url_img } from "../variables/variables";
import { Link } from "react-router-dom";
import { Button } from "./style/ButtonStyle";
import {
    CarruselSection,
    CarruselImg,
    ContenedorDeFlecha,
} from "./style/CarruselStyle";
import { Titulo, Texto } from "./style/TextoStyle";
import theme from "./style/Theme";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";
import {
    ContenedorCentrado,
    Overlay,
    ContenedorDeTexto,
} from "./style/ContenedoresStyle";

const Carrusel = () => {
    const peliculasCarrusel = useFetch(url_carrusel);
    let peliculas = [peliculasCarrusel[0]]
let pelicula = [peliculas['0']]
console.log(peliculas)
    return (
        <CarruselSection>
            {/* {peliculasCarrusel.map((pelicula) => 
               
            )} */}
            <article key={peliculas.id}>
                <CarruselImg url={`${base_url_img}${peliculas.poster_path}`}>
                    <Overlay>
                        <ContenedorDeFlecha>
                            <MdKeyboardArrowLeft />
                        </ContenedorDeFlecha>
                        <ContenedorDeTexto>
                            <ContenedorCentrado>
                                <Titulo width="auto" align="center">
                                    {peliculas.original_name}
                                    {peliculas.original_title}
                                </Titulo>

                                <Texto align="center" width="400px">
                                    {peliculas.overview}
                                </Texto>

                                <ContenedorCentrado>
                                    <Link
                                        to={`peliculaDetalle/${peliculas.id}`}
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

                        <ContenedorDeFlecha>
                            {/* <MdKeyboardArrowRight onClick={setactualEnCarrusel(actualEnCarrusel+1)}/> */}
                        </ContenedorDeFlecha>
                    </Overlay>
                </CarruselImg>
            </article>
        </CarruselSection>
    )
}

export default Carrusel;