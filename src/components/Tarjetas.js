import { base_url_img } from '../variables/variables'
import { Link } from 'react-router-dom'
import { TarjetaImg } from './style/TarjetaStyle'

const Tarjetas = ({ peliculas }) => {
    return (
        <>
            {peliculas.map(pelicula => {
                return (<div
                    key={pelicula.id}>

                    <article>
                        <Link to={`peliculaDetalle/${pelicula.id}`} >
                            <h1>{pelicula.original_name}{pelicula.original_title}</h1>
                            <div>
                                <TarjetaImg src={`${base_url_img}${pelicula.poster_path}`} />
                            </div>
                        </Link>
                    </article>

                </div>
                )
            })}
        </>

    )
}
export default Tarjetas


