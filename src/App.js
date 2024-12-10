import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Gallery from './pages/Gallery.jsx'
import Game from './pages/Game.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <Router>
      <div className="app-container"> 
        <NavBar />
        <main className="main-content"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/game" element={<Game />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
