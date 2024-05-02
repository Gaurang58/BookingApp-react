import React from "react";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Login() {
  const [user, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const loginUser = () => {

    const loginData = {
      email,
      password
    }


    axios
      .get("http://localhost:8000/users")
      .then((res) => {
        const foundUser = res.data.find((u) => u.email === loginData.email);
        console.log(foundUser)
        if (foundUser && foundUser.password === password) {
          localStorage.setItem("user", JSON.stringify(foundUser));
          localStorage.setItem("isLoggedIn", true);
          toast.success("Login Success.");
          navigate("/")
        } else {
          toast.error("Invalid Credentials.");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="card-container">
      <div className="card card-wrapper">
        <h2 className="form-type my-heading">Booking.com</h2>
        <input
          placeholder="Email"
          type="text"
          className="validate"
          value={email}
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="validate"
          value={password}
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          onClick={loginUser}
          className="btn btn-primary my-btn"
        >
          Login
        </button>
        <p className="redirect">
          Don't have an account ? <Link to="/register">SignUp</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
