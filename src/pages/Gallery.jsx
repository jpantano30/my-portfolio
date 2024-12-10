import aruba from '../assets/aruba.jpeg'
import culGradCertsAndAwards from '../assets/cul grad certs and awards.jpeg'
import culGradFam from '../assets/cul grad fam.jpeg'
import culSchoolCreampuffAndEclair from '../assets/cul school creampuff and eclair.jpeg'
import jAndMBabyshowerCake from '../assets/J&M babyshower cake.jpeg'
import jenaSkiing from '../assets/jena skiing.jpeg'
import ovhSquat from '../assets/OVHsquat.jpeg'
import paisBigeyesGym from '../assets/pais-bigeyes-gym.jpeg'
import papaSculpting from '../assets/Papa sculpting.jpeg'
import pecanPie from '../assets/pecan pie.jpg'
import SmoresCroissantOpen from '../assets/SmoresCroissantOpen.jpg'
import Tully from '../assets/tully.jpg'

import '../styles/gallery.css'
import { useState } from 'react'



const images = [
  { src: aruba, alt: "Aruba", caption: "Beautiful view in Aruba on flamingo island" },
  { src: culGradCertsAndAwards, alt: "Culinary Graduation Certificates and Awards", caption: "My culinary school achievements" },
  { src: culGradFam, alt: "Culinary Graduation Family Photo", caption: "Culinary school graduation as valedictorian with family" },
  { src: culSchoolCreampuffAndEclair, alt: "Creampuffs and Eclairs", caption: "Delicious pastries from culinary school" },
  { src: jAndMBabyshowerCake, alt: "Babyshower Cake", caption: "Custom cake for a baby shower" },
  { src: jenaSkiing, alt: "Skiing Adventure", caption: "Enjoying the slopes" },
  { src: ovhSquat, alt: "Overhead Squat", caption: "Practicing overhead squats" },
  { src: paisBigeyesGym, alt: "dog", caption: "My dog Paisley!" },
  { src: Tully, alt: "dog", caption: "My other dog Tallulah!" },
  { src: papaSculpting, alt: "Papa Sculpting", caption: "My grandpa working on his edible sculpture" },
  { src: pecanPie, alt: "Pecan Pie", caption: "Homemade pecan pie" },
  { src: SmoresCroissantOpen, alt: "S'mores Croissant", caption: "Tasty s'mores croissant" }
]
const Gallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1
    const newIndex = isLastImage ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  return (
    <div>
      <h1>Gallery</h1>
      <div className='carousel-container'>
        <div className='carousel-wrapper'>
          <button onClick={goToPrevious} className="left">&#60;</button>
          <div className='carousel-slide'>
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <p className='caption'>{images[currentIndex].caption}</p>
          </div>
          <button onClick={goToNext} className="right">&#62;</button>
        </div>
      </div>
    </div>
  )
}

export default Gallery