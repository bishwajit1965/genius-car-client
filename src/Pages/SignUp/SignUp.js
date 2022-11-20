import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { FaFacebook, FaLinkedin, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const [success, setSuccess] = useState(false);

  const handSignUp = (event) => {
    event.preventDefault();
    setSuccess(false);
    // Collect input values
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const user = { name, email, password };

    // Create User
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setSuccess(true);
        console.log(user);
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
            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
            <form onSubmit={handSignUp}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Your name..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Your password..."
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">
                  Sign Up
                </button>
              </div>
              {success && (
                <p>
                  <small>User has been created successfully!!!</small>
                </p>
              )}
            </form>
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
              Already registered ?{" "}
              <Link className="text-orange-500 font-bold" to="/login">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
