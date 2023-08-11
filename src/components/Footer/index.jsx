import logo from '../../assets/images/LOGO.svg'

function Footer() {
    return (
      <footer className='footer'>
        <img className='logo' src={logo} alt="logo kasa" />
        <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
  export default Footer