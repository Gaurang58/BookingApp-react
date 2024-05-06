import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signupUser = (e) => {
    e.preventDefault();
    const userData = { name, email, password };

    axios
      .post("http://localhost:8000/users", userData)
      .then((res) => {
        localStorage.setItem("user", JSON.stringify(res.data));
        localStorage.setItem("isLoggedIn", true);
        navigate("/");
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
          placeholder="Enter a name"
          type="text"
          className="validate"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Email"
          type="text"
          className="validate"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          className="validate"
          value={password}
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
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
