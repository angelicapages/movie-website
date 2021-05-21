import { Link } from 'react-router-dom'
import './movie.css'
import { base_url_img } from '../variables/variables'
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import CardMedia from '@material-ui/core/CardMedia';

const Tarjetas = ({ peliculas }) => {
    return (
        <>
            {peliculas.map(pelicula => {
                return <Grid item xs={6} sm={3}
                    elevation={3}
                    direction="row"
                    justify="center"
                    alignItems="center">

                    <Card key={pelicula.id} >
                        <CardContent>
                            <Link to={`pelicula/${pelicula.id}`} >
                                <h1>{pelicula.original_name}{pelicula.original_title}</h1>
                                <CardMedia>
                                    <img src={`${base_url_img}${pelicula.poster_path}`} />
                                </CardMedia>
                            </Link>
                        </CardContent>
                    </Card>

                </Grid>
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
