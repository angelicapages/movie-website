import { base_url_img } from '../variables/variables'
import { Link } from 'react-router-dom'
import { TarjetaImg } from './style/TarjetaStyle'
import { TituloPelicula } from './style/TextoStyle'
import { Tarjeta } from './style/TarjetaStyle'
import { ContenedorCentrado, ContenedorRow } from './style/ContenedoresStyle'

const Tarjetas = ({ peliculas }) => {
    return (
        <ContenedorRow>
            {peliculas.map(pelicula => {
                return (


                    <Tarjeta key={pelicula.id}>
                        <Link to={`peliculaDetalle/${pelicula.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <ContenedorCentrado>
                                <TarjetaImg src={`${base_url_img}${pelicula.poster_path}`} />
                                <TituloPelicula width="200px" align="center">{pelicula.original_name}{pelicula.original_title}</TituloPelicula>
                            </ContenedorCentrado>
                        </Link>
                    </Tarjeta>

                )
            })}
        </ContenedorRow>

    )
}
export default Tarjetas


