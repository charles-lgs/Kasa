import logo from '../assets/logo-Kasa-white.png'
import '../styles/Footer.scss'

function Footer() {
    return <footer>
        <div className='container-footer'>
            <img className='img' src={logo} alt='Logo Kasa' />
            <p className='txt'>© 2020 Kasa. All rights reserved</p>   
        </div>
    </footer>
}

export default Footer