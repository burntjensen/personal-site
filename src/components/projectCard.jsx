import '../App.css'

export default function ProjectCard() {
    return (
        <main className="main">
        <h2 className="section-title">Work / Projects</h2>
        <div className="projects">
          <div className="project">
            <img
              src="https://via.placeholder.com/300" // Replace with actual project image URL
              alt="Project #1"
              className="project-image"
            />
            <h3 className="project-title">Project #1</h3>
            <p className="project-description">Description for Project #1</p>
          </div>
          <div className="project">
            <img
              src="https://via.placeholder.com/300" // Replace with actual project image URL
              alt="Project #2"
              className="project-image"
            />
            <h3 className="project-title">Project #2</h3>
            <p className="project-description">Description for Project #2</p>
          </div>
        </div>
      </main>
    )
}