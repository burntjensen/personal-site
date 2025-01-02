import ProjectCard from '../components/projectCard.jsx'
import NavBar from '../components/nav.jsx'
import '../App.css'

function App() {
    return (
      <div className="app">
        <header className="header">
          <div className='hero-wrapper'>
            <img
              src="https://media.licdn.com/dms/image/v2/C5603AQGRresbPmHecg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1606263116525?e=1741219200&v=beta&t=f5hsgfYce6fQRBGMNDzLHF7PVZCfGJg3WZelcNs6KLk" // Replace with actual profile image URL
              alt="Profile"
              className="profile-image"
            />
            <div className='title-wrapper'>
              <h1 className="name">Brent Jensen</h1>
              <div className="social-icons">
                <a href="https://github.com/burntjensen" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <p className="description">
            I’m a professional marketer and self-taught developer building exciting products and exploring interesting ideas.
          </p>
        </header>
        
        <ProjectCard />
      </div>
    );
  }
  
  export default App
  