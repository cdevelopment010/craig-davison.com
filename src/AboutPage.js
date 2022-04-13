import Navigation from "./Navigation";
import AboutContent from "./AboutContent";
import AboutHero from "./AboutHero";
import Footer from "./Footer";  

export default function AboutPage() {
    const header = Navigation('about'); 
    const aboutHero = AboutHero();
    const aboutMe = AboutContent(); 
    const footer = Footer();       
   

    document.getElementById('root').append(header); 
    document.getElementById('root').append(aboutHero); 
    document.getElementById('root').append(aboutMe); 

    document.getElementById('root').append(footer);

}