export type Project = {
  title: string;
  description: string;
  src: string;
  github: string;
  url: string;
  stack: string[];
};

const Projects: Project[] = [
  {
    title: "Moja strona portfolio",
    description:
      "Strona portfolio napisana w React, inspirowana projektem ze strony <em>https://www.behance.net </em>",
    src: "songbook-image.png",
    github: "https://github.com/MagiTom/portfolio-react",
    url: "",
    stack: ["React", "Typescript", "Swipper", "GSAP", "SASS"],
  },
  {
    title: "Songs Book",
    description:
      "Śpiewnik gitarowy, <em>z opcją administratora</em>, który po zalogowaniu może dodawać, edytować lub usuwać utwory. Posiada panel boczny lewy, z którego można dodawać utwory do panelu prawego, gdzie znajduję się opcja druku do pdf. Utwory mają <em> możliwość transpozycji chwytów</em> oraz wyszukiwarkę.",
    src: "songbook-image.png",
    github: "https://github.com/MagiTom/worship-song-book",
    url: "https://worhipsongs.netlify.app/",
    stack: ["Angular", "Typescript", "Angular Material", "SASS", "Firebase"],
  },
  {
    title: "Background Catcher - mobile",
    description:
      "Aplikacja <em>mobilna</em> do pobierania i zapisywania tła na smartfona. Ta aplikacja jest <em>zintegrowana z Unsplash API</em>, dzięki czemu możesz uzyskać swoje ulubione tapety według kategorii, losowo, zapisać je i pobrać. Aplikacja została zbudowana z użyciem <em>Ionic-Angular</em> i wykorzystuje NGRX w celu praktykowania tej biblioteki. Baza danych - Firebase.",
    src: "mobile-category.png",
    github: "https://github.com/MagiTom/Background-Catcher",
    url: "",
    stack: ["Angular", "NGRX", "Ionic", "SASS", "Firebase"],
  },
  {
    title: "Starsza stona portfolio",
    description: "Moja <em>stara wersja</em> strony portfolio",
    src: "old-image.png",
    github: "https://github.com/MagiTom/Portfolio-Website",
    url: "",
    stack: ["Angular", "Typescript", "SASS"],
  },
];

export default Projects;