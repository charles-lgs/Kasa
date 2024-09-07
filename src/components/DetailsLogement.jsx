

function DetailsLogement({description, equipements}) {
    return (
        <div className="details-logement">
            <details>
                <summary>Description</summary>
                <p>{description}</p>
            </details>
            <details>
                <summary>Équipements</summary>
                <ul>
                    {equipements.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </details>
        </div>
    )
}

export default DetailsLogement