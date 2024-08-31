import '../styles/Gallery.scss'

function Gallery({logements}) {
    return (
        <div className="gallery">
            {logements.map((logement) => (
                <div key={logement.identifiant} className="card">
                    <img src={logement.couverture} alt={logement.titre} className="img-card" />
                    <h3 className="title-card">{logement.titre}</h3>
                </div>
            ))}
        </div>
    )
}

export default Gallery