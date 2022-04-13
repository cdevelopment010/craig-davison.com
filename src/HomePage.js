import Navigation from "./Navigation";
import Hero from "./Hero";
import Skills from "./Skills";
import Footer from "./Footer";
import Projects from "./Projects";

export default function HomePage() {
    const header = Navigation('home'); 
    const hero = Hero(); 
    const skills = Skills(); 
    const projects = Projects(); 
    const footer = Footer(); 




    document.getElementById('root').append(header); 
    document.getElementById('root').append(hero); 
    document.getElementById('root').append(skills); 
    document.getElementById('root').append(projects); 
    document.getElementById('root').append(footer);

}