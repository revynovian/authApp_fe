import React from 'react';

function Login() {

  const google = () => {
    window.open("http://localhost:5000/auth/google", "_self")
  }

  return (
    <div>
      <div className="login">
        <div className="LoginContainer">
          <div className="loginTitle">
          <img src="https://img.icons8.com/color/96/000000/triskelion.png" alt='logo'/>
            <h5>Welcome back! Please enter your details </h5>
          </div>
          <div className="emailFormContainer">
            <input type="text" placeholder='username or email'/>
            <input type="password" placeholder='password'/>
            <button className="customButton submit">Sign In</button>
          </div>
          <div>
            -- Or Sign in With --
          </div>
          <div className="ssoLoginContainer">
            <button className="customButton2" onClick={google}>
            <img src="https://img.icons8.com/ios-filled/50/000000/google-logo.png" alt='google'/>
              Google
            </button>
            <button className="customButton2">
              <img src="https://img.icons8.com/glyph-neue/64/000000/facebook-new.png" alt='facebook'/>
              Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
