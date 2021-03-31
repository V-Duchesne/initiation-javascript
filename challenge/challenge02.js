let garreD = "Bruxelles-midi";
let chauffeur = "";
let garreA = prompt("Destination ?") || "Mons";

if (garreD !="" && garreA !="" && chauffeur != "")
{
    document.write(`le train pour ${garreA} peut partir`);
}else{
    document.write(`le train pour ${garreA} reste a quai`);
}