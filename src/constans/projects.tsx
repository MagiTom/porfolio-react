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
    title: "projects.0.title",
    description: "projects.0.description",
    src: "songbook-image.png",
    github: "https://github.com/MagiTom/portfolio-react",
    url: "",
    stack: ["React", "Typescript", "Swipper", "GSAP", "SASS"],
  },
  {
    title: "projects.1.title",
    description: "projects.1.description",
    src: "songbook-image.png",
    github: "https://github.com/MagiTom/worship-song-book",
    url: "https://worhipsongs.netlify.app/",
    stack: ["Angular", "Typescript", "Angular Material", "SASS", "Firebase"],
  },
  {
    title: "projects.2.title",
    description: "projects.2.description",
    src: "mobile-category.png",
    github: "https://github.com/MagiTom/Background-Catcher",
    url: "",
    stack: ["Angular", "NGRX", "Ionic", "SASS", "Firebase"],
  },
  {
    title: "projects.3.title",
    description: "projects.3.description",
    src: "old-image.png",
    github: "https://github.com/MagiTom/Portfolio-Website",
    url: "",
    stack: ["Angular", "Typescript", "SASS"],
  },
];

export default Projects;
