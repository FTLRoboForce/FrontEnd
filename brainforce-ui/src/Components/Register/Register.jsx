import "./Register.css";

export function Register() {
  return (
    <div className="registration-page-container">
      <div className="registration-container">
        <div className="registration-heading">
          <section>Register</section>
        </div>
        <div className="registration-form">
          <form>
            <div className="registration-form-top">
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  placeholder="Enter your first name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Enter your last name"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  placeholder="Enter a username"
                  className="form-input"
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" id="email" placeholder="Enter your email" 
                 className="form-input"/>
                
              </div>
            </div>
            <div className="registration-form-bottom">
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                />
              </div>

              <div className="form-group">
                <label htmlFor="password">Confirm Password</label>
                <input
                  type="password"
                  id="password"
                  placeholder="Enter your password"
                  className="form-input"
                />
              </div>
            </div>

            <div className="registration-form-button">
              <button type="submit">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
