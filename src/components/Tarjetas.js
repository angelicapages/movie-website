import { Link } from 'react-router-dom'
import './movie.css'
import { base_url_img } from '../variables/variables'

const Tarjetas = ({ peliculas }) => {

    return (
        <>
            {peliculas.map(pelicula => {
                return <div key={pelicula.id}>
                    <Link to={`pelicula/${pelicula.id}`}>
                        <h1>{pelicula.original_name}{pelicula.original_title}</h1>
                        <img src={`${base_url_img}${pelicula.poster_path}`} />
                    </Link>
                </div>
            })}

        </>
    )
}
export default Tarjetas
// const MovieCards = Texto => (

//     return 

//     <div>
//       <h1>{Texto}</h1>
{/* <p>{pelicula.overview}</p> */ }

//     </div>
//   )

//   export default MovieCards 

