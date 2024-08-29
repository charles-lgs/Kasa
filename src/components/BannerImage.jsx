import '../styles/BannerImage.scss'

function BannerImage({title, backgroundImage}) {
    return <div className="container-image" style={{backgroundImage: `url(${backgroundImage})`}}>
        <h1 className="title">{title}</h1>
    </div>
}

export default BannerImage