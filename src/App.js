import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Customer from "./components/Customer";
import MyNavbar from "./components/MyNavbar";
import Footer from "./components/Footer";
import MyBookings from "./components/MyBookings";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/customer" element={<Customer />} />
          <Route path="/mybookings" element={<MyBookings />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
