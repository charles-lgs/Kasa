import {Link, useLocation} from 'react-router-dom'
import logo from '../assets/logo-Kasa.png'
import '../styles/Banner.scss'

function Banner() {
    const location = useLocation()

    return (
        <header className='banner'>
            <div className='container-logo'>
                <img src={logo} alt='Logo Kasa' className='logo' />
            </div>
            <nav className='navigation'>
                <ul>
                    <li><Link to='/' className={location.pathname === '/' ? 'active' : ''}>Accueil</Link></li>
                    <li><Link to='/A-Propos' className={location.pathname === '/A-Propos' ? 'active' : ''}>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Banner