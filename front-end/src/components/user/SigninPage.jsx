import React from "react";
import "./SigninPage.css";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SigninPage = () => {
  const navigate = useNavigate();

  ////Login Submit
  const loginSubmit = (e) => {
    e.preventDefault();

    let email = document.forms["loginForm"]["email"].value;
    let password = document.forms["loginForm"]["password"].value;
    console.log(email);
    console.log(password);
    if (email == "") {
      toast.error("Email is empty");
      return true;
    } else if (password == "") {
      toast.error("Password is empty");
      return true;
    } else {
      toast.error("Login Successful");
    }

    setTimeout(() => {
      navigate("/home");
    }, 1000);
  };

  return (
    <div className="signinpage-main-body">
      <Toaster />
      <div className="signinpage-left-body">
        <div className="signinpage-logo-sec">
          <img src="/logo.png" alt="" className="signinpage-logo" />
        </div>
        <div className="signinpage-brand-name-sec">Base</div>
        <div className="signinpage-social-media-logo-sec">
          <img
            src="/github.png"
            alt=""
            className="signinpage-social-media-logo"
          />
          <img
            src="/twitter.png"
            alt=""
            className="signinpage-social-media-logo"
          />
          <img
            src="/linkedin.png"
            alt=""
            className="signinpage-social-media-logo"
          />
          <img
            src="/discode.png"
            alt=""
            className="signinpage-social-media-logo"
          />
        </div>
      </div>
      <div className="signinpage-seperate"></div>
      <div className="signinpage-right-body">
        <div className="signinpage-login-body-sec">
          <div className="login-body-title-sec">
            <h2>Sign In</h2>
            <h5>Sign in to your account</h5>
          </div>
          <div className="login-body-login-with-sec">
            <div className="login-body-login-with-google">
              <img src="/google.png" alt="" className="google-apple-logo" />
              Sign in with Google
            </div>
            <div className="login-body-login-with-apple">
              <img src="/apple.png" alt="" className="google-apple-logo" />
              Sign in with Apple
            </div>
          </div>
          <form className="login-form" name="loginForm">
            <div className="login-form-email-sec">
              Email address
              <input
                type="text"
                name="email"
                required
                className="login-form-input"
              />
            </div>
            <div className="login-form-password-sec">
              Password
              <input
                type="password"
                name="password"
                required
                className="login-form-input"
              />
            </div>
            <div className="login-form-forgotpass-sec">Forgot Password?</div>
            <div className="login-form-signin-btn-sec">
              <button className="signin-button" onClick={loginSubmit}>
                Sign In
              </button>
            </div>
          </form>
          <div className="login-register-link">
            Don't have an account?{" "}
            <span style={{ color: "blue" }}>&nbsp; Register here</span>
          </div>
        </div>
        <div className="signinpage-login-form-socialmedia">
          <img
            src="/github.png"
            alt=""
            className="signinpage-social-media-logo"
          />
          <img
            src="/twitter.png"
            alt=""
            className="signinpage-social-media-logo"
          />
          <img
            src="/linkedin.png"
            alt=""
            className="signinpage-social-media-logo"
          />
          <img
            src="/discode.png"
            alt=""
            className="signinpage-social-media-logo"
          />
        </div>
      </div>
    </div>
  );
};

export default SigninPage;
