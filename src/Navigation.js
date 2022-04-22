import HomePage from "./HomePage";
import AboutPage from "./AboutPage"
import ContactPage from "./ContactPage";

export default function Navigation(currPage) {
    const header = document.createElement('header'); 
    const logo = document.createElement('div'); 
    const nav = document.createElement('nav'); 
    const ul = document.createElement('ul'); 
    const home = document.createElement('li');
    const contact = document.createElement('li');
    const about = document.createElement('li');
    const homeLink = document.createElement('a');
    const aboutLink = document.createElement('a');
    const contactLink = document.createElement('a');

    switch (currPage) {
        case 'home': 
            home.classList.add('current-page'); 
            break;
        case 'about': 
            about.classList.add('current-page'); 
            break; 
        case 'contact': 
            contact.classList.add('current-page'); 
            break; 
        default: 
            return 'ERROR'; 
    }

    [homeLink, contactLink, aboutLink].forEach(navItem => {
        navItem.addEventListener('click', function() {
            let page = this.innerText+'Page'; 
            navigate(page);
        })
    })


    homeLink.innerText = 'Home';
    home.append(homeLink)
    contactLink.innerText = 'Contact';
    contact.append(contactLink)
    aboutLink.innerText = 'About';
    about.append(aboutLink)
    ul.append(home);
    ul.append(about);
    ul.append(contact);

    nav.append(ul); 

    logo.innerText = 'Craig Davison'; 
    logo.id = 'logo'; 

    header.append(logo);
    header.append(nav);


    return header; 
}


function navigate(page) {
    document.getElementById('root').innerHTML = ''; 
    switch(page) {
        case 'HomePage': 
            HomePage();
            break;
        case 'AboutPage':
            AboutPage(); 
            break; 
        case 'ContactPage': 
            ContactPage();
            break;
        default: 
            console.log('ERROR'); 
    }
}