export default function Hero() {
    const container = document.createElement('section'); 
    const heading = document.createElement('h1'); 
    const cta1 = document.createElement('a'); 
    const cta2 = document.createElement('a');
    const heroImage = document.createElement('div'); 
    const profileImage = document.createElement('img'); 
    const img1 = document.createElement('div'); 
    const img2 = document.createElement('div'); 
    const img3 = document.createElement('div'); 

    heroImage.id = 'hero-image'; 

    img1.className = 'hex hex-1';
    img2.className = 'hex hex-2';
    img3.className = 'hex hex-3';
    profileImage.src = './images/edited-profile-pic.png';

    heroImage.append(img1);
    heroImage.append(img2);
    heroImage.append(img3);
    heroImage.append(profileImage);

    cta1.innerText = 'Download CV';
    cta2.innerText = 'Checkout my YouTube Channel ->';
    cta1.className = 'cta cta-1';
    cta2.className = 'cta cta-2';
    cta1.href='./Craig-Davison-CV.pdf';
    cta1.download = "Craig-Davison-CV";
    cta2.href='https://www.youtube.com/channel/UCtHK20C4Dw4fcs7kZDl4QPQ';
    
    
    heading.innerHTML = `
        I'm <span class='call-out'>Craig</span>,<br/> 
        A <span class='call-out'>Front-End</span> Web Developer<br/>
        From <span class='call-out'>Durham</span>, England
        `; 

    


    container.append(heroImage); 
    container.append(heading); 
    container.append(cta1);
    container.append(cta2);

    container.className = 'hero';
    return container; 
}