export default function AboutHero() {
    const container = document.createElement('section'); 
    const title = document.createElement('h1'); 
    const favouriteThings = document.createElement('h2');
    const image = document.createElement('img'); 
    

    title.innerText = 'About'
    favouriteThings.innerHTML = `
        <span class="call-out">Front-end</span> Web Developer<br>
        Lover of <span class="call-out">Dark Chocolate</span><br>
        <span class="call-out">Skier &amp; Snowboarder</span><br>
        Devourer of <span class="call-out">Books</span>
        `; 

    image.src = './images/Uke.JPG'

    container.append(title); 
    container.append(image); 
    container.append(favouriteThings); 
    container.id = 'about-hero'

    return container; 
}