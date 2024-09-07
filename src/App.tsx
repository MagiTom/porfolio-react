import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar/Navbar";
import './App.scss'
import BackgroundWithCircle from "./components/BackgroundWithCircle/BackgroundWithCircle";

const App: React.FC = () => {
  return (
    <Router>
      <BackgroundWithCircle topPosition="0" size="750px">
      <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      </BackgroundWithCircle>
    </Router>
  );
};

export default App;
