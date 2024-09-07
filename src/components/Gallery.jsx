import '../styles/Gallery.scss'
import {Link} from 'react-router-dom'

function Gallery({logements}) {
    return (
        <div className="gallery">
            {logements.map((logement) => (
                <Link to={`/Fiche-Logement/${logement.identifiant}`} key={logement.identifiant}>
                    <div className="card">
                        <img src={logement.couverture} alt={logement.titre} className="img-card" />
                        <h3 className="title-card">{logement.titre}</h3>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Gallery