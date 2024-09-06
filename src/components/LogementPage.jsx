import {useParams, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import Slideshow from './Slideshow'

function LogementPage({logements}) {
    const navigate = useNavigate()
    const {id} = useParams()
    const logement = logements.find(log => log.identifiant === id)

    useEffect(() => {
        if (!logement) {
            navigate('*')
        }
    }, [logement, navigate])

    if (!logement) {
        return null;
    }

    return (
        <div>
            <Slideshow photos={logement.photos} title={logement.titre} />
            <div>
                <div>
                    <h1>{logement.titre}</h1>
                    <p>{logement.emplacement}</p>
                    {/* mots clé à ajouter */}
                </div>
                {/* étoiles à ajouter */}
                <div>
                    <h2>{logement.hôte.nom}</h2>
                    <img src={logement.hôte.image} alt={`Photo de ${logement.hôte.nom}`} />
                </div>
                <div>
                    {/* AboutLogement à ajouter */}
                </div>
            </div>
        </div>
    )
}

export default LogementPage