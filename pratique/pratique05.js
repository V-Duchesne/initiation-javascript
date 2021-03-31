//demander au user d'introduire une chaine de caractère
//envoyer cette chaine de caractère dans un tableau
//redemender si le user veut entrer une nouvelle donnée dans le tableau
/* si user ok --> recommance
si user !ok --> on arrete et on affiche en console, le contenu du tableau*/

//déclarer un tableau
/*
let tableau = []
pour envoyer la donnée dans le tableau
tableau.push(donnée)
console.log(tableau)
*/

let tableau = [];
function donnée(){
    do{
        let data = prompt(`donnée ?`)
        tableau.push(data);    
    }while(confirm(`Entrer une autre donnée ?`));
}
donnée();
alert(`Au revoir`);
console.log(tableau);
