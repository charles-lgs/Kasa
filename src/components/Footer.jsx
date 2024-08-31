import logo from '../assets/logo-Kasa-white.png'

function Footer() {
    return <footer>
        <div className='container-footer'>
            <img src={logo} alt='Logo Kasa' />
            <p>© 2020 Kasa. All rights reserved</p>   
        </div>
    </footer>
}

export default Footer