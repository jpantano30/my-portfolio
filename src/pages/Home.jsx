import ProPic from '../assets/ProPic.jpeg'
import '../styles/home.css'
const Home = () => {
  return (
    <div className="home-container">
      <img src={ProPic} alt='Jena Pantano Portrait' className='profile-pic' />
      <div className="textbox">
        <h1>Welcome to My Portfolio</h1>
        <h2>Hi, I'm Jena Pantano!</h2>
        <p>Software Engineer</p>
        <p>Welcome to my portfolio! Here you can find a bit about me, explore the projects I've completed, view my resume, and connect with me through various social platforms. I'm passionate about creating innovative solutions at the intersection of technology and health/fitness.</p>
      </div>
    </div>
  )

}
export default Home