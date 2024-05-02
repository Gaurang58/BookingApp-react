import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const [user, setUser] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();

    const userData = {
      name,
      email,
      password,
      address: "",
      bookings: [],
      phone: "",
    };

    axios
      .post("http://localhost:8000/users", {
        ...userData,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("isLoggedIn",true);
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="card-container">
        <div className="card card-wrapper">
          <h2 className="form-type my-heading">Booking.com</h2>
          <input
            placeholder="name"
            type="text"
            className="validate"
            value={name}
            name="name"
            onChange={(e) => setName(e.target.value)}
          />
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
            onClick={signupUser}
            className="btn btn-primary my-btn"
          >
            Register
          </button>
          <p className="redirect" to="/login">
            Don't have an account ?<Link to="/login">Signup</Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default Register;
