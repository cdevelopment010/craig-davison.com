import AnimatedCircles from "./AnimatedCircles";
export default function Skills() {

    const skills = document.createElement('section'); 
    const title = document.createElement('h2'); 
    const circles = AnimatedCircles(); 
    const skillContainer = document.createElement('div'); 
    const skillSelection = [{name: 'HTML5', class: 'fab fa-html5 fa-5x'},
                            {name: 'CSS3', class: 'fab fa-css3 fa-5x'},
                            {name: 'JavaScript', class: 'fab fa-js fa-5x'},
                            {name: 'Bootstrap', class: 'fab fa-bootstrap fa-5x'},
                            {name: 'React', class: 'fab fa-react fa-5x'},
                            {name: 'SCSS', class: 'fab fa-sass fa-5x'},
                            {name: 'Figma', class: 'fab fa-figma fa-5x'},
                            {name: 'Git & GitHub', class: 'fab fa-github fa-5x'},
                        ]

    title.innerText = 'Skills'; 

    skillSelection.forEach(skill => {
        let item = createSkill(skill.name, skill.class); 
        skillContainer.append(item); 
    })

    skillContainer.className = 'skill-container';

    skills.append(circles); 
    skills.append(title);
    skills.append(skillContainer); 
    skills.id = 'skill-section'; 
    return skills;
}



function createSkill(skill, faClass) {
    const container = document.createElement('div');
    const icon = document.createElement('i'); 
    const skillName = document.createElement('p'); 

    skillName.innerText = skill;
    icon.className = faClass; 

    container.append(icon); 
    container.append(skillName); 
    container.id = skill; 

    return container; 
}