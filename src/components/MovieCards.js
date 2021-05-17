import { Link } from 'react-router-dom'
import './movie.css'
import { base_url_img } from '../variables/variables'

const MovieCards = ({ peliculas }) => {
    console.log(peliculas)
    return (
        <>
            {peliculas.map(pelicula => {
                return <div key={pelicula.id}>
                    <Link to={`pelicula/${pelicula.id}`}>
                        <h1>{pelicula.original_title}</h1>
                        <img src={`${base_url_img}${pelicula.poster_path}`} />
                    </Link>
                    <p>{pelicula.overview}</p>
                </div>
            })}

        </>
    )
}
export default MovieCards
// const MovieCards = Texto => (

//     return 

//     <div>
//       <h1>{Texto}</h1>
//     </div>
//   )

//   export default MovieCards 

