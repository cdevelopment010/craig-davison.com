export default function ContactForm() {
    const form = document.createElement('form');
    const email = document.createElement('input');
    const subject = document.createElement('input');
    const textarea = document.createElement('textarea');
    const button = document.createElement('button');
    

    form.autocomplete = "off"; 
    form.action = "https://formsubmit.co/cdevelopment010@gmail.com"; 
    form.method = "POST"; 

    email.type='email'; 
    email.name = 'email'; 
    email.required = true;
    email.placeholder = "Email address"; 

    subject.type = "hidden"; 
    subject.name = "_subject"; 
    subject.value = "Contact Form - Portfolio"; 

    textarea.name = "message"; 
    textarea.placeholder = "Your message..."; 

    button.type = "submit"; 
    button.innerText = 'Send Message'; 



    form.append(email); 
    form.append(subject); 
    form.append(textarea); 
    form.append(button); 

 
    form.id = 'contact-form'

    return form; 
}
