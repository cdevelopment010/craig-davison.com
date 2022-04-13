export default function AboutContent() {
    const container = document.createElement('section'); 
    const para1 = document.createElement('p');
    const para2 = document.createElement('p');
    const para3 = document.createElement('p');
    const para4 = document.createElement('p');
    const para5 = document.createElement('p');

    para1.innerHTML = 'Hello! I focus on HTML, CSS and JavaScript to build custom websites.'; 
    para2.innerHTML = `I enjoy learning new skills, and every month I set myself a challenge. Anything from waking up early, doing carido every day or learning to draw (that one really didn't go well!).`; 
    para3.innerHTML = `My love of learning is why I enjoy web development, there is always something I can improve upon or a new skill to learn.`; 
    para4.innerHTML = `See my YouTube channel (<a href="https://www.youtube.com/channel/UCtHK20C4Dw4fcs7kZDl4QPQ/featured" target="_blank" rel="noopener noreferrer">link to channel</a>) which shows my web development journey &amp; my monthly challanges.`; 
    para5.innerHTML = `I have a background in Mathematics (1st class honors) and Data Analytics - using tools such as; SAS, SQL, R and VBA.`; 


    container.append(para1);
    container.append(para2);
    container.append(para3);
    container.append(para4);
    container.append(para5);
    container.id = 'about-long'

    return container; 
}