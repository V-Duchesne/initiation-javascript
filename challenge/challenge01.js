let age = prompt("Quel est votre age")

if (age >= 16 && age < 18){
    document.getElementById("text").appendChild(document.createTextNode(`Vous êtes mineur mais aux usa vous pouvez conduire une voiture`));  
    //Vous êtes mineur mais aux usa vous pouvez conduire une voiture
}else if (age < 18){
    document.getElementById("text").appendChild(document.createTextNode(`Vous êtes mineur`));  
    //Vous êtes mineur
}else if (age >= 18 && age <= 20){
    document.getElementById("text").appendChild(document.createTextNode(`Dans la plupart des pays d'Europe, vous êtes majeurs`));  
    //Dans la plupart des pays d'Europe, vous êtes majeurs
}else{
    document.getElementById("text").appendChild(document.createTextNode(`Aux usa vous avec maintenant le droit d'acheter de l'alcool`));  
    //Aux usa vous avec maintenant le droit d'acheter de l'alcool
}