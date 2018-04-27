"use strict"

//Library Object
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
    typeOfFood2: "Italian sweets",
    animal: "unicorns",
    pluralNoun: "concrete shoes",
    adjective2: "gloomy",
    adjective3: "claustrophobic",
 }

//Test to see if the Object Exists
 if (!localStorage.getItem('madLibraryData')){
     console.log('data is set');
     populateStorage();
 }else{
     console.log('data needs to be set')
     getDb();
 }

function populateStorage() {
    let objectToString = JSON.stringify(madLibrary);
    localStorage.setItem('madLibraryData: ', objectToString);
}

function getDb() {
    let db = localStorage.getItem('madLibraryData');
    let dbParse = JSON.parse(db);
    console.log("parsed data: ", dbParse);
    console.log("data.key: ", dbParse.celebrity);
    let paragraph = `Would it surprise you to learn that the most majestic ${dbParse.animal} in the world eat garbage? Well, they do! Everything from ${dbParse.typeOfFood} soda cans to ${dbParse.noun}-stained ${dbParse.TypeofFood2} boxes to used ${dbParse.pluralNoun} - and more! Some have been spotted ${dbParse.pluralNoun3} dumpsters and then using their long ${dbParse.pluralNoun3} to spear as many bags of ${dbParse.typeOfFood2} as they can before being caught. According to an interview with the ${dbParse.numberVal} News, ${dbParse.pluralNoun1} once came home to find a/an ${dbParse.typeOfFood} unicorn ${dbParse.verbEndingIning} up in the recycling bin. The poor thing had mistaken leftover ${dbParse.typeOfFood2} for dried up ${dbParse.celebrity}. It was a ${dbParse.adjective3} mistake. I am a good cook!`;
    document.getElementById("unicorn").innerHTML = paragraph;
}


