import { Link } from 'react-router-dom'


export default function NavBarTop() {
    return (
        <>
            <h1>Movies</h1>
            <ul>
            {<Link to="/" >
                    <li>Home</li>
                </Link>}
                
                <Link to="/New-movies">
                    <li>Ultimos lanzamientos</li>
                </Link>
                <Link to="/Populares">
                    <li>Populares</li>
                </Link>
                <Link to="/Buscar">
                    <li>Buscar</li>
                </Link>
            </ul>
        </>
    )
}
