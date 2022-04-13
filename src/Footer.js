export default function Footer() {
    const footer = document.createElement('footer'); 
    const githubLink = document.createElement('a'); 
    const githubImg = document.createElement('i'); 
    const youtubeLink = document.createElement('a'); 
    const youtubeImg = document.createElement('i'); 


    githubLink.href = 'https://github.com/cdevelopment010/'; 
    githubLink.target = 'blank'
    githubImg.className = 'fab fa-github fa-3x'; 
    githubLink.append(githubImg); 

    youtubeLink.href = 'https://www.youtube.com/channel/UCtHK20C4Dw4fcs7kZDl4QPQ'; 
    youtubeLink.target = 'blank';
    youtubeImg.className = 'fab fa-youtube fa-3x';
    youtubeLink.append(youtubeImg); 

    footer.append(githubLink); 
    footer.append(youtubeLink); 

    return footer; 

}