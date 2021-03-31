let nom= "";
let prénom= "";

while (nom == null || prénom == null || nom == "" || prénom == ""){
    nom = prompt("Nom ?");
    prénom = prompt("Prénom ?");
}
document.write(`${nom} ${prénom}`);