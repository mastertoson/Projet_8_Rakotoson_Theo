import { Link } from 'react-router-dom'
 
function Nav() {
    return (
        <nav className='navbar'>
            <Link className='navbar__link_home' to="/">Accueil</Link>
            <Link className='navbar__link_about' to="/About"> A propos</Link>
        </nav>
    )
}

export default Nav