import resumePDF from '../assets/JenaPResume.pdf'
import '../styles/resume.css'
const Resume = () => {
  return (
    <div className="resume-container">
      <h1 className="resume-title">Resume</h1>
      <iframe 
        className="resume-pdf"
        src={resumePDF}
        type="application/pdf"
        width="100%"
        height="100%"
        title="Jena Pantano Resume"
      />
    </div>
  )
}

export default Resume