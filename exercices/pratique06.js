document.querySelector('#a-supprimer').remove();

document.body.style.margin = '0';

let header = document.createElement('header');
header.innerHTML='<h1> Bienvenue </h1>';
document.body.append(header);

header.style.backgroundColor = '#e3b04b';
header.style.textAlign = 'center';
header.style.color = 'white'
header.style.fontSize = '1.5rem';
header.style.padding = '1rem';

let sousHeader = document.createElement('div');
sousHeader.innerHTML= '<a href=#>Accueil</a> / <a href=#>Une autre page</a>';
document.body.append(sousHeader);

sousHeader.style.backgroundColor = '#f1d6ab';
sousHeader.style.fontSize = '1.2rem';
sousHeader.style.paddingLeft = '1rem';
sousHeader.style.padding = '1rem';

let link = document.querySelectorAll('a');
link[0].style.textDecoration = 'none';
link[1].style.textDecoration = 'none';
link[0].style.color = 'aqua';
link[1].style.color = 'aqua';


let para = document.createElement('p');
para.textContent = 'Ceci est un paragraphe créé avec JavaScript !';
document.body.append(para);
para.style.paddingLeft = '1rem';