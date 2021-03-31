/******************
 **** PARTIE 1 ****
 /*****************/

var nom = "Duchesne"; //variable globale, peut être utilisée dans tout mon code
let prénom = 'Vincent'; //variable globale, n'est accessible qu'à certain endroit de mon code

const registreNational = "817022-554-32"; //variable locale dont la valeur ne changera pas
console.log(registreNational); //je peux lire ma variable
// registreNational = "123254-244-21"; //si je réaffecte une nouvelle valeur à cette constante
// console.log(registreNational);


/******************
 **** PARTIE 2 ****
 /*****************/

 let rue = "Place de la concorde"; //chaine de caractère
 console.log(rue);

 let âge = 18; //number
 console.log(âge);

 let majeur = true; //boolean
 console.log(majeur);

 let personne = { //objet
    nom: "Duchesne",
    prénom: "Vincent",
    âge: "32"
 }

 console.log(personne);

 console.log(personne.nom + " " + personne.prénom + " " + personne.âge);

 function direBonjour(){console.log("Bonjour")}; //déclarer une fonction

 direBonjour(); //appel de ma fonction