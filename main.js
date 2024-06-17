import {Training} from "./training.js"

// Global Déclaration //

const actualDate = new Date()
const numeroSemaine = getWeekNumber(actualDate)

const displayCard = document.querySelector("#display-card")
const displayBtn = displayCard.querySelector("#display-btn")
const laListe = displayCard.querySelector("#la-liste")
const messageWeekNumber = displayCard.querySelector("#message-week-number")
const theListe = document.querySelector("#liste-mots")

const listeMot22 = ["le soir","le matin","le midi","beau","un oiseau"]
const listeMot15 = ["le chapeau","bonhomme","la fleur","un gâteau","il a","elle a"]


const trainingCard = document.querySelector("#training-card")
const motAEcrire = trainingCard.querySelector("#le-mot")
const trainingCount = trainingCard.querySelector("#training-count")
const trainingMaxCount = trainingCard.querySelector("#training-max-count")
const validInput = document.querySelector("#training-valid")
const trainingNext = document.querySelector("#training-next")
const answerModify = document.querySelector("#answer-modify")
const trainingConfirm = document.querySelector("#training-confirm")

const feedBack = trainingCard.querySelector("#is-correct")
const inputMot = trainingCard.querySelector("#input-mot")



machination()

/*
trainingTry()

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
*/

function machination(){
appendListeDesMots()
eventOnTrainingBtnClick()
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
    console.log(ulListe)
    const newDiv = document.createElement("div")
    newDiv.id = "la-liste"
    newDiv.textContent = listeMot15.join(" - ")
    ulListe.append(newDiv)
}

function hiddenTO(motAEcrire,trainer) {setTimeout(() => {
    trainingCourse(trainer)

    const displayBtn = document.querySelector("#display-btn")
    displayBtn.addEventListener("click",clickHandlerTrainingBtn,{"once":true})
    motAEcrire.classList.toggle("hidden")
}, 5000);

}

function eventOnTrainingBtnClick(){

    displayBtn.addEventListener("click",handlerOnTrainingBtnClick
        ,{"once":true})
    
}

function handlerOnTrainingBtnClick(){
    feedBack.classList.toggle("hidden")
    trainingCount.innerText = 0

        var trainer = new Training(listeMot15,"test")
        displayBtn.classList.toggle("hidden")
        trainingCard.classList.toggle("hidden")
            theListe.classList.toggle("hidden")
            validInput.classList.toggle("hidden")
            trainingNext.classList.toggle("hidden")
        trainingNextWord(trainer)
        inputMot.focus()
        inputMot.removeAttribute("readonly")
        inputMot.select()

}

function trainingNextWord(trainer){
    console.log("trainer._trainingCount === trainer.trainingMaxCount",trainer._trainingCount, trainer.trainingMaxCount,trainer._trainingCount === trainer.trainingMaxCount)
    if(trainer._trainingCount === trainer.trainingMaxCount){
        feedBack.textContent = `Ton score final est de ${trainer._score}/${trainer.trainingMaxCount}`}
        else {
    trainingMaxCount.textContent = trainer.totalWordCount
    feedBack.classList.toggle("hidden")

    inputMot.value = ""
     hiddenTO(motAEcrire,trainer)
     
 
       motAEcrire.textContent =  trainer.getNextWord()
       //displayBtn.removeEventListener("click",clickHandlerTrainingBtn,{"once":true})
       validInput.classList.toggle("hidden")
       trainingNext.classList.toggle("hidden")}
       inputMot.focus()
       inputMot.select()
  }

function trainingCourse(trainer){
    validInput.addEventListener("click",function(){handlerOnTrainingValidClick(trainer)},{"once":true})

}

function handlerOnTrainingValidClick(trainer){
    console.log("click")
    feedBack.classList.toggle("hidden")
    console.log(trainer._trainingCount)
    console.log({trainer})
    trainingCount.innerText = trainer._trainingCount
    console.log(`Il fallait écrire "${motAEcrire.textContent}".`)
    console.log(`La réponse donnée est "${inputMot.value}".`)

    feedBack.textContent = `Ta réponse est "${inputMot.value}", confirme pour passer au mot suivant.`
    trainingConfirm.addEventListener("click",function(){handlerOnTrainingConfirmClick(trainer)})

    if (inputMot.value === motAEcrire.textContent){
    motAEcrire.classList.toggle("hidden")
    trainer._score++
        answerModify.addEventListener("click",function(){answerReset(trainer)})
        answerModify.classList.toggle("hidden")
  
    } else (feedBack.textContent = "Mauvaise réponse !")
    motAEcrire.classList.toggle("hidden")
    validInput.classList.toggle("hidden")
    trainingNext.addEventListener("click",function(){trainingNextWord(trainer)},{"once":true})
    trainingNext.classList.toggle("hidden")
    
  //  setTimeout(() => {motAEcrire.textContent =  trainer.getNextWord()},3000)

}

function handlerOnTrainingConfirmClick(trainer){

}

function answerReset(trainer){
    feedBack.classList.toggle("hidden")
    trainingNext.classList.toggle("hidden")
    validInput.classList.toggle("hidden")
        answerModify.classList.toggle("hidden")
        motAEcrire.classList.toggle("hidden")
    inputMot.value = null
    

}
async function clickHandlerTrainingBtn(){
    
    displayBtn.addEventListener("click",function() {    
       

                 hiddenTO(motAEcrire)
        console.log("laListe",laListe)
            trainingCard.classList.toggle("hidden")
            theListe.classList.toggle("hidden")
           motAEcrire.textContent =  listeMot22[getRandomArbitrary(0,4)]
           //displayBtn.removeEventListener("click",clickHandlerTrainingBtn,{"once":true})
           }
        ,{"once":true})
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

 