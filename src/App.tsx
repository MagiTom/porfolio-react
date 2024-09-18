import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import "./App.scss";
import BackgroundWithCircle from "./components/BackgroundWithCircle/BackgroundWithCircle";
import "./i18n.js";
import SplashScreen from "./components/SplashScreen/SplashScreen";

const AppRoutes: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, [location]); 

  return (
    <>
      <SplashScreen loading={loading} />
      <BackgroundWithCircle topPosition="0" size="750px">
         <div className="App">
           <Navbar />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
       <Route path="/contact" element={<Contact />} />
      </Routes>
      </div>
      </BackgroundWithCircle>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
