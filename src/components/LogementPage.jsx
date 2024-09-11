import {useParams, useNavigate} from 'react-router-dom'
import {useEffect} from 'react'
import '../styles/LogementPage.scss'
import Slideshow from './Slideshow'
import Rating from './Rating'
import DetailsLogement from './DetailsLogement'
import Keywords from './Keywords'

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
        <div className='logement-page'>
            <Slideshow photos={logement.photos} title={logement.titre} />
            <div className='all-description'>
                <div className='title-and-host'>
                    <div className='title'>
                        <h1>{logement.titre}</h1>
                        <p>{logement.emplacement}</p>
                        <Keywords words={logement.MotsClés} />
                    </div>
                    <div className='rating-and-host'>
                        <Rating score={parseInt(logement.notation)} />
                        <div className='host'>
                            <h2>{logement.hôte.nom}</h2>
                            <img src={logement.hôte.image} alt={`Photo de ${logement.hôte.nom}`} />
                        </div>
                    </div>
                </div>
                <DetailsLogement description={logement.description} equipements={logement.équipements} />
            </div>
        </div>
    )
}

export default LogementPage