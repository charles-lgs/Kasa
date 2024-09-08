import {useState} from 'react'
import '../styles/Slideshow.scss'
import arrowLeft from '../assets/arrow-left.png'
import arrowRight from '../assets/arrow-right.png'

function Slideshow({photos, title}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
        setCurrentIndex((index) => index === 0 ? photos.length - 1 : index - 1)
    };

    const goToNext = () => {
        setCurrentIndex((index) => index === photos.length - 1 ? 0 : index + 1)
    };

    if (photos.length <= 1) {
        return (
            <div className='slideshow'>
                <img src={photos[0]} alt={title} />
            </div>
        )
    }

    return (
        <div className='slideshow'>
            <img src={arrowLeft} alt='Flèche gauche' onClick={goToPrevious} className='arrow arrow-left' />
            <img src={arrowRight} alt='Flèche droite' onClick={goToNext} className='arrow arrow-right' />
            <img src={photos[currentIndex]} alt={title} className='slideshow-image' />
            <div className='counter'>
                {currentIndex + 1}/{photos.length}
            </div>
        </div>
    )
}

export default Slideshow