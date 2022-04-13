import ProjectCard from "./ProjectCard";
export default function Projects() {
    const projectContainer = document.createElement('section'); 
    const title = document.createElement('h2'); 
    const imageLoc = '../images/'


    title.innerText = 'Projects'; 
    projectContainer.id = 'projects';
    projectContainer.append(title); 

    const projects = [
        {
            name: 'weather app',
            img: imageLoc+'weather-app.png', 
            description: 'Project created from The Odin Project curriculum. Using JavaScript, Webpack and an API.',
            link: 'http://weather-app.craig-davison.com/',
        },
        {
            name: 'Exercise App',
            img: imageLoc+'cdevelopment010-exercise-app.netlify.app_ (Home).png', 
            description: `Can't decide what to do in your workout? Use this app to randomly create your workout. Simply select the number of exercises you want to complete. Built using ReactJS and my own exercise API.`,
            link: 'https://cdevelopment010-exercise-app.netlify.app/',
        },
        {
            name: 'To Do List',
            img: imageLoc+'TOP-todo-list_.png', 
            description: 'Project created from The Odin Project curriculum. Using local storage, JavaScript, Webpack and SASS.',
            link: 'https://cdevelopment010.github.io/TOP-todo-list/',
        },
        {
            name: 'Tic-Tac-Toe',
            img: imageLoc+'TOP-project-tic-tac-toe_.png', 
            description: 'Project created from The Odin Project curriculum. Using JavaScript and has the option to play against an AI.',
            link: 'https://tic-tac-toe.craig-davison.com/',
        },
        {
            name: 'Tip Calculator',
            img: imageLoc+'TipCalc.png', 
            description: 'frontEndMentor.io challenge built using HTML, SCSS and JavaScript.',
            link: 'https://cdevelopment010.github.io/WebDevJourney/Week10/FEM/TipCalc/',
        },
        {
            name: 'Liquid Ignition',
            img: imageLoc+'liquid-ignition.craig-davison.com.png', 
            description: 'A mock up for a cocktail bar that hosts weekly events. It is built using CSS grids and flexbox.',
            link: 'https://liquid-ignition.craig-davison.com/',
        },
        {
            name: 'Doggy Play Mates',
            img: imageLoc+'doggy-play-mates.craig-davison.com_.png', 
            description: 'An initial build of a tinder like website to find dogs in your area for play dates with your dog. Built using SCSS and JavaScript, with a local JSON file loaded using fetch. The next step would be to connect this to a database and allow users to sign up.',
            link: 'https://doggy-play-mates.craig-davison.com/',
        },
        {
            name: 'Reflex Game',
            img: imageLoc+'reflex-game.png', 
            description: 'A quick game to test your reflexes - how fast can you click the circles? This is built using the HTML canvas and using JavaScript to check the position of the click within the canvas.',
            link: 'https://reflex-game.craig-davison.com/',
        },
    ]

    for (let i = 0; i < projects.length; i++) {
        const project = ProjectCard(projects[i].name,projects[i].img, projects[i].description, projects[i].link); 
        projectContainer.append(project);
    }


    return projectContainer; 

}