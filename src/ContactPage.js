import Navigation from "./Navigation";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function ContactPage() {
    const header = Navigation('contact'); 
    const contactSection = document.createElement('section');
    const title = document.createElement('h1'); 
    const para = document.createElement('p')
    const form = ContactForm(); 
    const footer = Footer(); 

    title.innerText = 'Contact';
    para.innerHTML = `Please feel free to get in touch using the below form, or email me at <a href="mailto:craig.davison@hotmail.co.uk">Craig.davison@hotmail.co.uk</a>`;

    
    contactSection.append(title); 
    contactSection.append(para); 
    contactSection.append(form);
    contactSection.id = 'contact-section'

    document.getElementById('root').append(header); 
    document.getElementById('root').append(contactSection); 
    document.getElementById('root').append(footer);
}