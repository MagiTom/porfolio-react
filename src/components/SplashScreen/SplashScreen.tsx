import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import about from "../../assets/circle-about.svg";
import contact from "../../assets/circle-contact.svg";
import projects from "../../assets/circle-projects.svg";
import "./SplashScreen.scss";

const SplashScreen: React.FC<{loading: boolean}> = ({loading}) => {
  const location = useLocation();
  const { hash, pathname, search } = location;
  const [image, setImage] = useState<string>();
  console.log("pathname", pathname);

  useEffect(() =>{
      console.log('pathname', pathname);
        switch (pathname) {
    case "/":
      setImage(about);
      break;
    case "/projects":
      setImage(projects);
      break;
    case "/contact":
      setImage(contact);
      break;
  }
  }, [pathname]);

  return (
    <>
      {loading && (
        <div className="splash-screen" style={{ 
            opacity: !loading ? "0" : "1" }}>
          {image && <img src={image} alt="" />}
        </div>
       )}
    </>
        
      )
};

export default SplashScreen;
