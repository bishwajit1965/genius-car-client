import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const Login = () => {
  const { logIn } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    setSuccess(false);

    logIn(email, password)
      .then((result) => {
        const user = result.user;
        if (result) {
          setSuccess(true);
          form.reset();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="hero w-full">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row my-20">
        <div className="text-center lg:text-left">
          <img className="w-3/4" src={loginImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="/" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  Login
                </button>
              </div>
            </form>
            {success && (
              <p>
                <small>Login successful!!!</small>
              </p>
            )}

            <div className="sign-up-options py-3">
              <p className="text-center mb-2">Or Sign Up with</p>
              <div className="flex justify-center gap-5">
                <Link to="">
                  <FaFacebook />
                </Link>
                <Link to="">
                  <FaLinkedin />
                </Link>
                <Link to="">
                  {" "}
                  <FaGoogle />
                </Link>
              </div>
            </div>
            <p className="text-center">
              New to Genius Car ?{" "}
              <Link className="text-orange-500 font-bold" to="/signup">
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
