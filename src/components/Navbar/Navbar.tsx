import React, { useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from 'classnames';


export const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
      setIsOpen(!isOpen);
    };
  return (
         <nav className={styles.navbar}>
      <div className={styles.navbar_container}>
        <div className={styles.navbar_logo}><p>
        Magdalena<br/>
        Tomala</p>
        <div onClick={toggleNavbar}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>
        </div>
    
        <ul className={classNames(styles.navbar_menu, { [styles.active]: isOpen })}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
          <li>
            <div className={styles.navbar_lang}>
                <p>Pl</p>
                <p>En</p>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
