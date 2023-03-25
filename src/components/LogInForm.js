import "./LogInFormStyles.css";

const LogInForm = (props) => {
  return (
    <div className="login-body">
      <div className="login-main">
        <input
          type="checkbox"
          id="chk"
          className="login-input"
          aria-hidden="true"
        />
        <div className="signup">
          <form>
            <label htmlFor="chk" className="login-label" aria-hidden="true">
              Sign up
            </label>
            <input
              type="text"
              className="login-input"
              name="txt"
              placeholder="Name"
              required
            />
            <input
              type="email"
              className="login-input"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="login-input"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="signup-button">Sign up</button>
          </form>
        </div>
        <div className="login">
          <form>
            <label htmlFor="chk" className="login-label" aria-hidden="true">
              Login
            </label>
            <input
              type="email"
              className="login-input"
              name="email"
              placeholder="Email"
              required
            />
            <input
              type="password"
              className="login-input"
              name="pswd"
              placeholder="Password"
              required
            />
            <button className="login-button">Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
