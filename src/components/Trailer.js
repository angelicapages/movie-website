import { Link } from "react-router-dom"
import {base_url_video} from "../variables/variables"

const Trailer = ({ video }) => {
    console.log(video)
    return (
        <>
            <Link to={`${base_url_video}${video.key}`}>Link</Link>

        </>)
}

export default Trailer