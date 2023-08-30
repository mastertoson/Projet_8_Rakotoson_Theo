import logo from '../../assets/images/LOGO.svg'
import Nav from '../Nav'
import { Link } from "react-router-dom"
 
function Header() {
    return (
        <header className='HeaderWrap'>
            <Link to={'/'} className='HeaderWrap__fig'> <img className='logo' src={logo} alt="logo kasa" /> </Link>
           
            <Nav className='navbar' />
        </header>
    )
}

export default Header