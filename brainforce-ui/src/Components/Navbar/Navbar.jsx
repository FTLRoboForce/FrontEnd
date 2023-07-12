import './Navbar.css';
import logo from '../../images/brainForce-logo.png'
import einstein from '../../images/einstein.png'



export function Navbar() {
    return (

        <div>
            <nav className='nav-container'>
                <section className="logo-container">
                    <img src={logo} alt="BrainForce Logo" />
                    <h3>BrainForce</h3>
                </section>
               <section className='nav-links-container'>
                     <ul className="nav-links">  
                        <li><a href="#">Make Course</a></li>
                        <li><a href="#">Previous Flashcard</a></li>
                        <li><a href="#">Previous Quizzes</a></li>
                        <li><a href="#">Leaderboard</a></li>
                    </ul>
               </section>

             

              

               <section className='user-activity-container'>
                    <ul className="user-activity">
                        <section id="navbar-login-container">
                        <button onClick={() => window.location = "login"}> Login</button>

                        </section>

                        <section id="navbar-signup-container">
                        <button> Sign Up</button>
                        </section>
                        
                        
                       
                    </ul>

               </section>
            </nav>
            <section id='einstein-container1'>
               <img src={einstein} alt="Einstein" />
               </section>
            <section id='einstein-container2'>
               <img src={einstein} alt="Einstein" />
               </section>
          
        </div>
    )
}