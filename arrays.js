let actName = "James";
let actSurname = "Franco";
if(actName.length > actSurname.length){
console.log(actName);
}
else{
    console.log(actSurname);
}
console.log("--------");
console.log(actName.toUpperCase(), actSurname.toLowerCase());
console.log("--------");
let act1 = actName[0] + actSurname[0];
console.log(act1);
console.log("--------");
let act2 = actName.substring(actName.length - 3) + " " + actSurname.substring(actSurname.length - 3);
console.log(act2);
console.log("--------");
let film1 = "An American in Paris";
let film2 = film1.replace(/a/gi, "*");
console.log(film2);
console.log("--------");
let film3 = film1.replace(/[aeiyou]/gi,"");
console.log(film3);
let film4 = "Breakfast at Tiffany's";
let film5 = film4.replace(/[aeiyou]/gi,"");
console.log(film5);
let film6 = "2001: A Space Odyssey";
let film7 = film6.replace(/[aeiyou]/gi,"");
console.log(film7);
let film8 = "It's a Wonderful Life";
let film9 = film8.replace(/[aeiyou]/gi,"");
console.log(film9);
console.log("--------");
let starWars = "Star Wars: Episode " + " ".repeat(Math.ceil(Math.random() * 10)) + (Math.ceil(Math.random() * 7) + 1) + " - A New Hope";
console.log(starWars);
let replace = starWars.replace(/\D/g,'');
console.log(replace);
console.log(starWars[starWars.length -14]);
console.log("--------");
let text = "Don't Be a Menace to South Central While Drinking Your Juice in the Hood";
console.log("Don't Be a Menace to South Central While Drinking Your Juice in the Hood");
let x = text.split(" ");
let count = 0;
for(let i = 0; i < x.length; i++){
const word = x[i];
if(word.length <= 5){
    count++;
}
}
console.log(count);