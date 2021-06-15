import { base_url_img } from '../variables/variables'
import { Link } from 'react-router-dom'
import { TarjetaImg } from './style/TarjetaStyle'
import { Titulo } from './style/TituloStyle'
import { Tarjeta } from './style/TarjetaStyle'

const Tarjetas = ({ peliculas }) => {
    return (
        <>
            {peliculas.map(pelicula => {
                return (


                    <Tarjeta key={pelicula.id}>
                        <Link to={`peliculaDetalle/${pelicula.id}`} style={{ textDecoration: 'none', color: 'white' }}>
                            <TarjetaImg src={`${base_url_img}${pelicula.poster_path}`} />
                            <Titulo>{pelicula.original_name}{pelicula.original_title}</Titulo>
                        </Link>
                    </Tarjeta>

                )
            })}
        </>

    )
}
export default Tarjetas


