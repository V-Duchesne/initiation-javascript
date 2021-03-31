//demande des informations
// let nom = prompt("Quel est votre nom ?");
// let prénom = prompt("Quel est votre prénom ?");
// let rue = prompt("Quel est votre rue ?");
// let nMaison = prompt("Quel est votre numéro d'habitation ?");
// let loc = prompt("Quel est votre localité ?");
// let cP = prompt ("Quel est votre code postal ?");
// let âge = prompt("Quel âge avez-vous ?");
// let poid = prompt("Quel est votre poid ?");
// let taille = prompt("Quelle taille faite vous (en cm) ?");
// let img = prompt("url d'une photo");
let image = document.createElement("img");
nom = "Duchesne";
prénom = "Vincent";
rue = "rue des Egyptiennes";
nMaison = "113";
loc = "Bouffioulx"
cP = "6200";
âge = "32";
poid = "185";
taille = "135";
image.src ="https://briansmith.com/wp-content/uploads/2012/02/Brian-Smith-Samuel-L-Jackson.jpg"

image.style.float='right';
image.style.marginLeft='3rem';



let tailleM = (taille/100).toFixed(2);
let résultat = poid / ((tailleM)*(tailleM));
let imc = résultat.toFixed(2);
// image.src = img;


document.getElementById("container").appendChild(document.createTextNode(`Nom: ${nom} - Prénom: ${prénom}`));  
document.getElementById("container").appendChild(document.createElement(`br`)); 
document.getElementById("container").appendChild(document.createTextNode(`Adresse: ${rue}, ${nMaison}`));  
document.getElementById("container").appendChild(document.createElement(`br`)); 
document.getElementById("container").appendChild(document.createTextNode(`Code Postal: ${cP} - ${loc}`));  
document.getElementById("container").appendChild(document.createElement(`br`)); 
document.getElementById("container").appendChild(document.createTextNode(`Age: ${âge} - Taille: ${tailleM}m + Poids: ${poid}`));  
document.getElementById("container").appendChild(document.createElement(`br`)); 
document.getElementById("container").appendChild(document.createTextNode(`Indice de masse corporelle: ${imc}`));  
document.getElementById("container").appendChild(image).width = '100';
