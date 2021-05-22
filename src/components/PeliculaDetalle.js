import { base_url_img } from '../variables/variables'
import { Card } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { useParams } from 'react'
import useFetch from '../hooks/useFetch'
import { url_base, type_movie, api_key, language } from '../variables/variables'

const PeliculaDetalle = () => {

    let params = useParams();
    const paramsUrl = `${url_base}${type_movie}${params}?${api_key}&${language}`
    const pelicula = useFetch(paramsUrl)
    return console.log(pelicula)

    // let params = useParams();
    // const paramsUrl = `${url_base}${type_movie}${params}?${api_key}&${language}`
    // const pelicula = useFetch(paramsUrl)
    // console.log(params.id)

    return (
        <>
            {/* <Card>
                <CardContent>
                    <h1>{pelicula.original_name}{pelicula.original_title}</h1>
                    <p>{pelicula.overview}</p>
                    <CardMedia>
                        <img src={`${base_url_img}${pelicula.poster_path}`} />
                    </CardMedia>
                </CardContent>
            </Card> */}
        </>

    )
}

export default PeliculaDetalle