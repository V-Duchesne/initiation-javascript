//LES VARIABLES DU JEU:

let mot = "bonjour";
let tableaulettre = [`-`, `-`, `-`, `-`, `-`, `-`, `-`];
let score = 10;
let lettreJoueur = "";
let trouvé = false;

//Fonction pour demander entrée user
function choisirLettre(){
    //Prompt pour assigner la velaur entrée par le user dans la variable lettreJoueur
    lettreJoueur = prompt(`Le mot à trouver est ${tableaulettre.join(" ")}\nIl vous reste ${score} essais, \nChoisissez une lettre`);
    //J'appelle ma fonction vérifierLettre avec en paramètre la variable qui a accueilli l'entrée user
    vérifierLettre(lettreJoueur);
}

//Fonction pour vérifier si la lettre entrée par le user se trouve dans mon mot
function vérifierLettre(x){
    //Boucle pour parcourir chacun des index de la variable mot (une chaine de caractère se parcour de la même manière qu'un tableau)
    for(i = 0; i <= 6; i++){
        //Si la lettre contenue à l'index i de mon mot == à la lettre envoyée par le user
        //(x = paramètre de ma fonction qui a récupéré la variable lettreJoueur lors de son appel en ligne 15)
        if(mot[i] == x){
            //J'assigne à l'index i de mon tableau de lettre la valeur donnée par le joueur
            tableaulettre[i] = x;
            //Je change mon boolean en true pour éviter de décrémenter mon score
            trouvé = true;
        }
    }
    //Je vérifie si trouvé est resté sur false ou s'il a changé de valeur. Si c'est le cas,
    //au moins une lettre à été trouvée, le score ne change pas. Si le boolean est resté sur false
    //Aucune lettre n'a été trouvée ==> score --
    if (trouvé == false){
        score--;
    }
    checkTableau();
}

//Fonction pour vérifier si toutes les lettres ont été trouvées ou si le score == 0
function checkTableau(){
    //Je reinitialise le boolean trouvé sur false pour le prochain tour de jeu.
    trouvé = false;
    if(score == 0){
        alert(`Vous avez perdu, le mot à trouver était ${mot}`);
    }else{
        let réponse = 0;
        for(i = 0; i < tableaulettre.length; i++){
            if(tableaulettre[i] != `-`){
                réponse++;
            }
        }
        if(réponse == mot.length){
            alert(`Bravo, vous avez gagné, le mot à trouvé était bien ${mot}`);
        }else{
            choisirLettre();
        }
    }
}

choisirLettre();