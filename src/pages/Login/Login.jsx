import { Helmet } from "react-helmet-async";
import React, { useContext, useEffect, useState } from "react";
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { AuthContext } from "../../providers/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const Login = () => {

  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';

  useEffect( () => {
    loadCaptchaEnginge(6);
  }, [])

  const handleLogin = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
    .then(result => {
      const user = result.user;
      console.log(user);
      Swal.fire({
        title: "User Login Successful.",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      });
      navigate(from, {replace: true})
    })
  }

  const handleValidateCaptcha = (e) =>{
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);
    if(validateCaptcha(user_captcha_value)){
      setDisabled(false);
    }else{
      setDisabled(true);
    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <Helmet>
        <title>Bistro Boss | Login Page</title>
      </Helmet>
      <div className="hero-content flex-col md:flex-row-reverse">
        <div className="text-center md:w-1/2 lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card text-center bg-base-100 w-full md:w-1/2 max-w-sm shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <fieldset className="fieldset">
              <label className="fieldset-label">Email</label>
              <input type="email" name="email" className="input" placeholder="Email" />
              <label className="fieldset-label">Password</label>
              <input type="password" name="password" className="input" placeholder="Password" />
              <label className="fieldset-label"><LoadCanvasTemplate /></label>
              <input onBlur={handleValidateCaptcha} type="text" name="captcha" className="input" placeholder="type the captcha above" />
              <button>
                <input disabled={disabled} type="submit" className="btn btn-soft btn-primary mt-4 w-full" value="Login" />
              </button>
            </fieldset>
          </form>
          <p className="-mt-4 mb-2"><small>New Here? <Link className="link link-success" to="/signup">Create an Account</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
