import { NavLink } from 'react-router-dom'
 
function Nav() {
    return (
        <nav className='navbar'>
            <NavLink className={({ isActive }) =>
						isActive ? 'navbar__link_home navbar__link_home_active' : 'navbar__link_home'
					} to="/">Accueil</NavLink>
            <NavLink className={({ isActive }) =>
						isActive ? 'navbar__link_about navbar__link_about_active' : 'navbar__link_about'
					} to="/About"> A propos</NavLink>
        </nav>
    )
}

export default Nav