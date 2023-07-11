
import './Navbar.css';

export function Navbar() {
    return (

        <div>
            <nav className='nav-container'>
                <section className="logo-container">
                    <img alt="logo goes here"/>

                </section>
               <section className='nav-links-container'>
                     <ul className="nav-links">  
                        <li><a href="#">Make Course</a></li>
                        <li><a href="#">Previos Flashcard</a></li>
                        <li><a href="#">Previous Quizzes</a></li>
                        <li><a href="#">Leaderboard</a></li>
                    </ul>
               </section>

               <section className='user-activity-container'>
                    <ul className="user-activity">
                        <section>
                        <button> Login</button>

                        </section>

                        <section>
                        <button> Sign Up</button>
                        </section>
                        
                        
                       
                    </ul>

               </section>
            </nav>
          
        </div>
    )
}