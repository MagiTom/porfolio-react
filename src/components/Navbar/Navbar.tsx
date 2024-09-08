import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { Link } from "react-router-dom";
import BackgroundWithCircle from "../BackgroundWithCircle/BackgroundWithCircle";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
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
            <li>
              <Link to="/" onClick={toggleNavbar}>
                About
              </Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleNavbar}>
                Projects
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleNavbar}>
                Contact
              </Link>
            </li>
            <li>
            <div className={styles.navbar_lang_mobile}>
            <p>Pl</p>
            <p>En</p>
          </div>
            </li>
          </ul>
            <div className={styles.navbar_lang_web}>
            <p>Pl</p>
            <p>En</p>
          </div>
        </div>
      </nav>
    </BackgroundWithCircle>
  );
};

export default Navbar;
