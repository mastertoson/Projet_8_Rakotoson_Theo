import { Link } from 'react-router-dom'
 
function Nav() {
    return (
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="/Logement"> Logement</Link>
        </nav>
    )
}

export default Nav