import '../styles/Keywords.scss'

function Keywords({words}) {
    return (
        <div className="keywords">
            {words.map((word, index) => (
                <span key={index}>{word}</span>
            ))}
        </div>
    )
}

export default Keywords