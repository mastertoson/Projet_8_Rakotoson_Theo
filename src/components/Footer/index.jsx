import footerLogo from '../../assets/images/logo-footer.svg'

function Footer() {
    return (
      <footer className='footer'>
        <img className='logo' src={footerLogo} alt="logo kasa" />
        <p className='footer_text'>© 2020 Kasa. All rights reserved</p>
      </footer>
    )
  }
  
  export default Footer