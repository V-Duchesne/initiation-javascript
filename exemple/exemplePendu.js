let mot = "bonjour";
let entréeUser = "o";
let lettreTrouvée = [];

for (i = 0; i <= (mot.length - 1); i++){
    lettreTrouvée.push(`-`);
}
console.log(lettreTrouvée);

//demander à mon user de rentrer une lettre

for( i = 0; i <= (mot.length - 1); i++){
    //vérifie si entréeUser == mot[i];
    if(entréeUser == mot[i]){
        lettreTrouvée[i] = entréeUser;
    }
}
console.log(lettreTrouvée);