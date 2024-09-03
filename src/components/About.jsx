import '../styles/About.scss'

function About({abouts}) {
    return (
        <div className="about">
            {abouts.map((about) => (
                <details key={about.id}>
                    <summary>{about.title}</summary>
                    <p>{about.about}</p>
                </details>
            ))}
        </div>
    )
}

export default About