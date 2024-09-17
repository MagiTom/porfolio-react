import React, { useEffect, useRef, useState } from "react";
import styles from "./Navbar.module.scss";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import BackgroundWithCircle from "../BackgroundWithCircle/BackgroundWithCircle";
import { useTranslation } from "react-i18next";
import { gsap, Power3 } from "gsap";
import { useGSAP } from "@gsap/react";
import navItems, { NavItem } from "../../constans/navItems";

gsap.registerPlugin(useGSAP);

export const Navbar: React.FC = () => {
  const aboutLinkRef = useRef<HTMLAnchorElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [target, setTarget] = useState<EventTarget & HTMLAnchorElement>();
  const { t, i18n } = useTranslation();
  const markerRef = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLUListElement>(null);
  const tl = useRef<any>(null);
  
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const activeItem = navItems.find(item => item.path === currentPath);
    
    if (activeItem && container.current) {
      const liElements = container.current.querySelectorAll("li");
      liElements.forEach(li => {
        const link = li.querySelector("a");
        if (link && link.getAttribute("href") === activeItem.path) {
          const targetLeftWidth = li.offsetWidth;
          const targetLeft = li.offsetLeft;
          gsap.to(markerRef.current, {
            left: targetLeft,
            width: targetLeftWidth,
            height: 4,
            ease: Power3.easeOut,
          });
        }
      });
    }
  }, [location.pathname]);

  useGSAP(
    () => {
      const boxes: HTMLLIElement[] = gsap.utils.toArray("li");
      tl.current = gsap.timeline().from(boxes, {
        duration: 2,
        opacity: 0,
        y: -200,
        stagger: {
          amount: 0.4,
        },
        ease: Power3.easeOut,
      });
    },
    { scope: container }
  );

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const target = event.currentTarget;
    setTarget(target);
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
            ref={container}
            className={classNames(styles.navbar_menu, {
              [styles.active]: isOpen,
            })}
          >
            <div ref={markerRef} className={styles.marker}></div>
            {navItems.map((item: NavItem) => (
              <li key={item.id}>
                <Link to={item.path} onClick={handleChangePage}>
                  {t(item.label)}
                </Link>
              </li>
            ))}
            <li>
              <div className={styles.navbar_lang_mobile}>
                <p className={i18n.language === "pl" ? styles.activeLang : ""} onClick={() => changeLanguage("pl")}>Pl</p>
                <p className={i18n.language === "en" ? styles.activeLang : ""} onClick={() => changeLanguage("en")}>En</p>
              </div>
            </li>
          </ul>
          <div className={styles.navbar_lang_web}>
          <p className={i18n.language === "pl" ? styles.activeLang : ""} onClick={() => changeLanguage("pl")}>Pl</p>
          <p className={i18n.language === "en" ? styles.activeLang : ""} onClick={() => changeLanguage("en")}>En</p>
          </div>
        </div>
      </nav>
    </BackgroundWithCircle>
  );
};

export default Navbar;
