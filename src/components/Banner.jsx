import {Link} from 'react-router-dom'
import logo from '../assets/logo-Kasa.png'
import '../styles/Banner.scss'

function Banner() {
    return (
        <header className='banner'>
            <div className='container-logo'>
                <img src={logo} alt='Logo Kasa' className='logo' />
            </div>
            <nav className='navigation'>
                <ul>
                    <li><Link to='/'>Accueil</Link></li>
                    <li><Link to='/A-Propos'>A Propos</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Banner