import flavo from "../assets/images/flavo.png"; 
import businessFinder from "../assets/images/businessfinder.png"; 
import cloudbrick from "../assets/images/cloudbrick.png"; 
import recipeApp from "../assets/images/recipe-app.png"; 
import trusoft from "../assets/images/trusoft.png"; 
import portfolio from "../assets/images/portfoliov1.png"; 


export const data = [
  {
    id: 1,
    name: "Restaurant App",
    summary: "Restaurant App done using ReactJS",
    src: flavo,
    link: "https://flavo.netlify.app",
    tools: [
      { id: 1, name: 'React'}
  ]},
  {
    id: 2,
    name: "Job Assessment App",
    summary: "Assessment application to check eligibility to apply for roles",
    src: trusoft,
    link: "http://trusoft-intern-assessment.herokuapp.com/profile",
    tools: [
      { id: 1, name: 'Angular'}]
  },
  {
    id: 3,
    name: "Cloudbrick Limited",
    summary: "Web application for tech company showcasing their services.",
    src: cloudbrick,
    link: "https://cloudbrick.netlify.app/",
    tools: [
      { id: 1, name: 'Angular'}, {id: 2, name: 'Bootstrap'}]
  },
  {
    id: 4,
    name: "Business Finder",
    summary: "Web application for registrering  and finding businesses in a specific area.",
    src: businessFinder,
    link: "https://business-finderng.netlify.app/",
    tools: [
      { id: 1, name: 'Angular'}, {id: 2, name: 'Laravel'}, {id: 3, name: 'Bootstrap'}]
  },
  {
    id: 5,
    name: "Recipe App",
    summary: "Recipe application made with Angular",
    src: recipeApp,
    link: "https://frontend-recipe-app.netlify.app/",
    tools: [
      { id: 1, name: 'Angular'}, {id: 2, name: 'Boostrap'}]
  },
  {
    id: 6,
    name: "Portfolio",
    summary: "Portfolio website  built using Angular",
    src: portfolio,
    link: "https://awebambi.netlify.app/",
    tools: [
      { id: 1, name: 'Angular'}, {id: 2, name: 'Bootstrap'}]
  },
];
