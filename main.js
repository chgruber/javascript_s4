// alert("hallo Welt");

let nachricht = "Hallo Welt";
//alert(nachricht);
nachricht = "neuer Text";
//alert(nachricht); 
console.log(nachricht);
const linkColor ="#ff0000";
let eine_variable = "test";
console.log("eine_variable", eine_variable);
// infos direkt an die Variabel anhaengen


let highScore = 10002551
// nummerische Zeichentyp

console.log("highScore ist:", highScore /20);
let meineNachricht ="test1";
console.log(meineNachricht);
meineNachricht = `Ein mehr
und ein ganz langer Text
und aus`;

console.log(meineNachricht);

let fullname = `Jeffrey "The Dude" Ledosky`
console.log(fullname)


let isover18 = true;
console.log("über 18?", isover18);
let age = 17;
console.log("age über 18", age>18);

let zahlenListe = [1,2,22,33,2,8];
console.log(zahlenListe);
let nameListe = ["Jamie", "John"];
console.log(nameListe);
console.log(nameListe[1]);
console.log("Anzahl der Namen in der Liste:",nameListe.length);

let benutzer = {
    Vorname: "Jamie",
    Nachname: "Anders",
    Alter: "23",
};
console.log("Benutzer:", benutzer);
console.log("Benutzer Alter:", benutzer.Alter);
benutzer.bestzeit =200;
benutzer["bestzeit ever"] = 200;
console.log(benutzer);

// Benutzer Eingabe

// let alter = prompt("Wie alt bist du?");
// console.log("Du bist", alter, "Jahre alt");

// console.log("Über 18?", alter >18);
// if (alter > 18) {
//     console.log("Du darfts hinein..");
// }
// else {console.log("noch nicht !8!")};

// Auskommentieren ist Steuerung und #

for (let i=1; i<=10; i++) {
    console.log("Wert von i", i);
}

function showage(birthYear) {
    let ago = 2018 - birthYear;
    console.log("Du bist", age, "Jahre alt");

} 
showage(1991)
showage(1948)

function calcAge(birthYear) {
    return 2018 - birthYear;
}

console.log("Du bist", calcAge(1991), "alt.")
