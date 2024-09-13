import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import BackgroundWithCircle from "../BackgroundWithCircle/BackgroundWithCircle";
import { useTranslation } from "react-i18next";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const markerRef = useRef<HTMLDivElement>(null); 
  const aboutLinkRef = useRef<HTMLAnchorElement>(null); 

  useEffect(() => {
    if (markerRef.current && aboutLinkRef.current) {
      const target = aboutLinkRef.current;
      markerRef.current.style.left = `${target.offsetLeft}px`;
      markerRef.current.style.width = `${target.offsetWidth}px`;
    }
  }, []); 

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  
  const handleChangePage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    console.log("Page change triggered", event);
    if (markerRef.current) {
      const target = event.currentTarget;
      markerRef.current.style.left = `${target.offsetLeft}px`;
      markerRef.current.style.width = `${target.offsetWidth}px`;
    }
    setIsOpen(false); 
  };

  return (
    <BackgroundWithCircle topPosition="30%" size="300px">
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div className={styles.navbar_logo}>
            <p>
              Magdalena
              <br />
              Tomala
            </p>
            <div onClick={toggleNavbar}>
              <i className={isOpen ? "fas fa-times" : "fas fa-bars"}></i>
            </div>
          </div>

          <ul
            className={classNames(styles.navbar_menu, {
              [styles.active]: isOpen,
            })}
          >
               <div ref={markerRef} className={styles.marker}></div>
            <li>
              <Link ref={aboutLinkRef} to="/" onClick={handleChangePage}>
                {t('navbar.about')}
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={handleChangePage}>
              {t('navbar.projects')}
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={handleChangePage}>
              {t('navbar.contact')}
              </Link>
            </li>
            <li>
            <div className={styles.navbar_lang_mobile}>
            <p onClick={() => changeLanguage('pl')}>Pl</p>
            <p onClick={() => changeLanguage('en')}>En</p>
          </div>
            </li>
          </ul>
            <div className={styles.navbar_lang_web}>
            <p onClick={() => changeLanguage('pl')}>Pl</p>
            <p onClick={() => changeLanguage('en')}>En</p>
          </div>
        </div>
      </nav>
    </BackgroundWithCircle>
  );
};

export default Navbar;
