import React from "react";
import "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Hobbies from "./components/Hobbies";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <Navbar />
      <Home />
      <About />
      <Hobbies />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
