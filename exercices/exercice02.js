//déclaration variables
let choix, premierNombre, deuxiemeNombre, résultat, conf;

function calculatrice(){
//demande de l'opération
do{
    choix = prompt(`Que voulez-vous faire ?\n
1.Addition\n
2.Multiplication\n
3.Soustraction\n
4.Division`);
    if(choix != 1 && choix != 2 && choix != 3 && choix != 4){
        alert(`choix possible : 1 - 2 - 3 - 4`);
    }
}while(choix != 1 && choix != 2 && choix != 3 && choix != 4);
//demande le 1er nombre
do{
    premierNombre = parseInt(prompt(`premier nombre`));
    if(isNaN(premierNombre)){
        alert(`entrez un nombre`);
    }
}while(isNaN(premierNombre));
//demande le 2eme nombre
do{
    deuxiemeNombre = parseInt(prompt(`deuxieme nombre`));
    if(isNaN(deuxiemeNombre)){
        alert(`entrez un nombre`);
    }
}while(isNaN(deuxiemeNombre));

calcul(premierNombre,deuxiemeNombre);
}
//création des fonctions
function addition(nombre1, nombre2){
    return nombre1 + nombre2;
}
function multiplication(nombre1, nombre2){
    return nombre1 * nombre2;
}
function soustraction(nombre1, nombre2){
    return nombre1 - nombre2;
}
function division(nombre1, nombre2){
    if(nombre2 == 0){
        alert(`impossible de diviser par 0`);
        calculatrice();
    }else{
    return nombre1 / nombre2;
    }
}
//calcul
function calcul(nombreN1,nombreN2){
    try{
        switch(choix){
            case `1`:
                alert(`${nombreN1} + ${nombreN2} = ${addition(premierNombre, deuxiemeNombre)}`);
                break;
            case `2`:
                alert(`${nombreN1} X ${nombreN2} = ${multiplication(premierNombre, deuxiemeNombre)}`);
                break;
            case `3`:
                alert(`${nombreN1} - ${nombreN2} = ${soustraction(premierNombre, deuxiemeNombre)}`);
                break;
            case `4`:
                alert(`${nombreN1} : ${nombreN2} = ${division(premierNombre, deuxiemeNombre)}`);
                break;
            default:
                throw new Error(`une erreur est survenue`);
        }
    } catch(e){
        alert(e);
        calculatrice();
    } finally{
        if(confirm(`Effectuer une autre opération ?`)){
            calculatrice();
        }else{
            alert(`Au revoir`)
        }
    }
}
calculatrice();
