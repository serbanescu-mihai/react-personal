// import javascript from "../images/JavaScript-logo.svg";

export const technology = [
  { id: 1, image: "./images/JavaScript-logo.svg", name: "JavaScript" },
  { id: 2, image: "./images/React-logo.svg", name: "React" },
  { id: 3, image: "./images/angular-logo.svg", name: "Angular" },
  { id: 4, image: "./images/Node.js-logo.svg", name: "node.js" },
  { id: 5, image: "./images/HTML5-logo.svg", name: "HTML 5" },
  { id: 6, image: "./images/CSS3-logo.svg", name: "CSS 3" },
  { id: 7, image: "./images/Sass-Logo.svg", name: "Sass" },
  { id: 8, image: "./images/Git-logo.svg", name: "git" },
  { id: 9, image: "./images/PostgreSQL-logo.svg", name: "PostgreSQL" },
];

export const projects = [
  {
    id: 1,
    image: "./images/mihai-serbanescu-website.png",
    projectName: "This website built using React",
    tools: [
      {
        id: 1,
        image: "fa-brands fa-react",
        name: "React",
      },
    ],
    url: "",
    gitHubLink: "https://github.com/serbanescu-mihai/ms-react",
  },
  {
    id: 2,
    image: "./images/mihai-serbanescu-website.png",
    projectName: "This website build using HTML, CSS, JS",
    projectDescription: "Personal projects website",
    tools: [
      {
        id: 1,
        image: "fa-brands fa-html5",
        name: "HTML",
      },
      {
        id: 2,
        image: "fa-brands fa-sass",
        name: "Sass",
      },
      {
        id: 3,
        image: "fa-brands fa-css3",
        name: "CSS",
      },
      {
        id: 4,
        image: "fa-brands fa-js",
        name: "JavaScript",
      },
    ],
    url: "https://www.mihaiserbanescu.com/",
    gitHubLink:
      "https://github.com/serbanescu-mihai/serbanescu-mihai.github.io",
  },
];
