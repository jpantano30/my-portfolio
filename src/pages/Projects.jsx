import '../styles/projects.css'
import medManager from '../assets/medmanager.png'
import workoutIndex from '../assets/workoutIndex.png'
import dogsVsCats from '../assets/dogsvscats.png'
import whatAreWeCookingIMG from '../assets/WhatAreWeCookingIMG.jpg'

function Projects() {
  const projects = [
    {
      image: medManager,
      projectLink: "https://medmanager.netlify.app/login",
      githubLink: "https://github.com/jpantano30/MedManager",
      backendLink: "https://github.com/jpantano30/MedManager-Backend",
      alt: "MedManager"
    },
    {
      image: workoutIndex,
      projectLink: "https://the-crossfit-vault-cadc50ebd52d.herokuapp.com/workouts",
      githubLink: "https://github.com/jpantano30/The-CrossFit-Vault",
      alt: "CrossFit Vault"
    },
    {
      image: dogsVsCats,
      projectLink: "https://dogsvscats.netlify.app/",
      githubLink: "https://github.com/jpantano30/Dogs-vs.-Cats",
      alt: "Dogs vs Cats"
    },
    {
      image: whatAreWeCookingIMG,
      projectLink: "https://what-are-we-cooking.netlify.app/",
      githubLink: "https://github.com/jpantano30/What_Are_We_Cooking-",
      alt: "What Are We Cooking"
    }
  ]

  return (
    <div>
      <h1 className='title'>Projects</h1>
      <h3 id="directions">Select the image to be directed to the project or view the code on GitHub!</h3>
      <div className="projectLinks">
        {projects.map((project, index) => (
          <div key={index} className="projectCard">
            <div className="projectName">{project.alt}</div>
            <a href={project.projectLink} target="_blank" rel="noopener noreferrer">
              <img src={project.image} alt={project.alt} className="projects" />
            </a>
            <div className="githubLinks">
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">View Code</a>
              {project.backendLink && 
                <a href={project.backendLink} target="_blank" rel="noopener noreferrer">View Backend Code</a>
              }
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Projects