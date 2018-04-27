'use strict';

let madLibrary = {
    pluralNoun1: "bears",
    adjective1: "pretty",
    noun: "street",
    typeOfFood: "mexican",
    articleOfClothing: "dickey",
    verbEndingIning: "wallowing",
    pluralNoun2: "trees",
    pluralNoun3: "lasers",
    numberVal: "113",
    celebrity: "Taylor Swift",
    color: "golden rod",
    verbEndingIning2: "licking",
    typeOfFood: "Italian sweets",
    pluralNoun: "concrete shoes",
    adjective2: "gloomy",
    adjective3: "claustrophobic"
 }
 
function populateStorage() {
    const objectToString = JSON.stringify(madLibrary);
    localStorage.setItem('madLibraryData', objectToString);
}

function getDb(){
    const db = localStorage.getItem('madLibraryData');
    const dbParse = JSON.parse(db);
    document.getElementById("unicorn").innerHTML = `Would it surprise you to learn that the most majestic ${dbParse.pluralNoun} in the world eat garbage? Well, they do! Everything from ${dbParse.adjective1} soda cans to ${dbParse.noun}-stained ${dbParse.typeOfFood} boxes to used ${dbParse.articleOfClothing} - and more! Some have been spotted ${dbParse.verbEndingIning} dumpsters and then using their long ${dbParse.pluralNoun2} to spear as many bags of ${dbParse.pluralNoun3} as they can before being caught. According to an interview with the ${dbParse.numberVal} Minutes News, ${dbParse.celebrity} once came home to find a/an ${dbParse.color} unicorn ${dbParse.verbEndingIning2} up in the recycling bin. The poor thing had mistaken leftover ${dbParse.typeOfFood} for dried up ${dbParse.pluralNoun}. 'It was a/an ${dbParse.adjective2} minstake. I am a good cook!`;
}

populateStorage();
getDb();






