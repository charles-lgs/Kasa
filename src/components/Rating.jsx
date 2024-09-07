import '../styles/Rating.scss'

function Rating({score}) {
    const stars = [1, 2, 3, 4, 5];

    return (
        <div className="rating">
            {stars.map((star) => (
                <i key={star} className={`fa-solid fa-star ${star <= score ? 'filled' : 'empty'}`}></i>
            ))}
        </div>
    )
}

export default Rating