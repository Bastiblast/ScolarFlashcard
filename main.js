import {TrainingTest} from "./modules/trainingTest.js"
import {listesMots} from "./listesMots.js"
import { TrainingTrain } from "./modules/trainingTrain.js"
// Global Déclaration //

const actualDate = new Date()
const numeroSemaine = getWeekNumber(actualDate)

const displayCard = document.querySelector("#display-card")
//const displayBtn = displayCard.querySelector("#display-btn")
const testBtn = document.querySelector("#test-btn")
const messageWeekNumber = displayCard.querySelector("#message-week-number")

const listeMot16 = ["le mois","la chambre","l'année","mes","demain"]


machination()


// Training test

const test = new TrainingTest("cardTest",listesMots)
//test.trainingCardLauncher()

const newTest = new TrainingTrain("newTest",listesMots)
console.log(newTest)
/*
newTest.getStarted()
newTest.handlerEventOnStartClick({
    "id": 14,
    "liste": [
        {
            "word": "le soir",
            "falseWord": [
                "lessoir",
                "le soar",
                "le seaur"
            ]
        },
        {
            "word": "le matin",
            "falseWord": [
                "le mattin",
                "le mathin",
                "le matain"
            ]
        },
        {
            "word": "le midi",
            "falseWord": [
                "le midie",
                "le mydi",
                "le middi"
            ]
        },
        {
            "word": "beau",
            "falseWord": [
                "baux",
                "bo",
                "beauh"
            ]
        },
        {
            "word": "un oiseau",
            "falseWord": [
                "un oaseau",
                "un oizeau",
                "un oiso"
            ]
        }
    ]
})
*/
//trainingTry()

function trainingTry(){

console.log("Création d'une nouvelle instance de Training...")
const newTraining = new Training(listeMot22,"litEtEcris")
console.log("Nouvelle instance créée : ",{newTraining})
console.log("newTraining.trainingCountNumber ",newTraining.trainingCountNumber)
console.log("Incrementation de trainingCount.")
newTraining.trainingCountIncrement()
console.log("newTraining.trainingCountNumber ",newTraining.trainingCountNumber)

console.log("Affiche la liste des mots restants ...")
console.log(newTraining.getRemainingWord())

newTraining.trainingCountIncrement()
console.log("Récupération d'un des mots de la liste : ", newTraining.getNextWord())
console.log("Récupération d'un des mots de la liste : ", newTraining.getNextWord())

console.log("Affiche la liste des mots restants ...")
console.log(newTraining.getRemainingWord())
newTraining.trainingCountIncrement()

console.log("Récupération d'un des mots de la liste : ", newTraining.getNextWord())

console.log(newTraining.getRemainingWord())
console.log("newTraining.trainingCountNumber : ",newTraining.trainingCountNumber)
}


function machination(){
appendListeDesMots()
eventOnGraduateBtnClick()
}

function getWeekNumber(d) {
    // Copy date so don't modify original
    d = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate()));
    // Set to nearest Thursday: current date + 4 - current day number
    // Make Sunday's day number 7
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay()||7));
    // Get first day of year
    var yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    // Calculate full weeks to nearest Thursday
    var weekNo = Math.ceil(( ( (d - yearStart) / 86400000) + 1)/7);
    // Return array of year and week number
    return [weekNo];
}

function appendListeDesMots(){
    messageWeekNumber.textContent += numeroSemaine
    const ulListe = displayCard.querySelector("#liste-mots")
    const newDiv = document.createElement("div")
    newDiv.id = "la-liste"
    newDiv.textContent = listeMot16.join(" - ")
    ulListe.append(newDiv)
} 


function eventOnGraduateBtnClick(){

    testBtn.addEventListener("click",function(){test.trainingCardLauncher()})
    
}

function eventOnTrainingBtnClick(){

    testBtn.addEventListener("click",function(){newTest.trainingCardLauncher()})
    
}
 