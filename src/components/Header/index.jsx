import logo from '../../assets/images/LOGO.svg'
import Nav from '../Nav'
 
function Header() {
    return (
        <header>
            <figure className='HeaderWrap'> <img className='logo' src={logo} alt="logo kasa" /> </figure>
           
            <Nav />
        </header>
    )
}

export default Header