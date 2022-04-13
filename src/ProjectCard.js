export default function ProjectCard(name, img, description, link) {

    const card = document.createElement('div'); 
    const title = document.createElement('h4'); 
    const desc = document.createElement('p'); 
    const image = document.createElement('img'); 
    const anchor = document.createElement('a'); 

    title.innerText = name; 
    desc.innerText = description; 
    image.src = img; 
    anchor.href = link; 
    anchor.innerText = 'view project here'; 


    card.append(image); 
    card.append(title); 
    card.append(desc); 
    card.append(anchor); 


    card.id = 'name'; 
    card.className = 'project-card'; 
    
    return card; 

}