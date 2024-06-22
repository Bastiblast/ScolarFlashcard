import {Training, TrainingSession} from "./training.js"

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
const listeMot16 = ["le mois","la chambre","l'année","mes","demain"]

const trainingCard = document.querySelector("#training-card")
const trainingConsigne = document.querySelector("#consigne")
const trainingWord = trainingCard.querySelector("#le-mot")
const trainingWordSentence = trainingCard.querySelector("#mot-a-ecrire") 
const trainingCount = trainingCard.querySelector("#training-count")
const trainingMaxCount = trainingCard.querySelector("#training-max-count")
const validBtn = document.querySelector("#training-valid")
const startBtn = document.querySelector("#training-start")
const nextBtn = document.querySelector("#training-next")
const answerModify = document.querySelector("#answer-modify")
const trainingConfirm = document.querySelector("#training-confirm")

const feedBack = trainingCard.querySelector("#is-correct")
const inputMot = trainingCard.querySelector("#input-mot")



machination()

// Training test

const test = new Training()
console.log(test)

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
    newDiv.textContent = listeMot16.join(" - ")
    ulListe.append(newDiv)
}

function hiddenTO(trainingWord,wordHide) {
    wordHide = setTimeout(() => {
        inputMot.classList.toggle("hidden")
        inputMot.focus()
        inputMot.removeAttribute("readonly")
        inputMot.select()
    if(!trainingWord.classList.contains("hidden")){trainingWord.classList.toggle("hidden")}
}, 5000);

}

function eventOnTrainingBtnClick(){

    displayBtn.addEventListener("click",function(){handlerOnTrainingBtnClick()})
    
}

function handlerOnTrainingBtnClick(){
    trainingCount.innerText = 0

        var trainer = new TrainingSession(listeMot15,"test")
        displayBtn.classList.add("hidden")
        trainingCard.classList.add("hidden")
            theListe.classList.add("hidden")
        trainingCard.classList.remove("hidden")
        validBtn.classList.add("hidden")
        trainingConfirm.classList.add("hidden")
        answerModify.classList.add("hidden")
        inputMot.classList.add("hidden")
        feedBack.classList.toggle("hidden")
        nextBtn.classList.toggle("hidden")
console.log("startBtn",startBtn)
trainingWordSentence.classList.toggle("hidden")
startBtn.classList.remove("hidden")

trainingConfirm.addEventListener("click",function(){handlerOnTrainingConfirmClick(trainer)})
answerModify.addEventListener("click",function(){answerReset()})
validBtn.addEventListener("click",function(){handlerOnTrainingValidClick(trainer)})
        startBtn.addEventListener("click",function(){
            trainingWordSentence.classList.toggle("hidden")
            trainingConsigne.classList.toggle("hidden")
            nextBtn.classList.toggle("hidden")
            feedBack.classList.toggle("hidden")
            startBtn.classList.toggle("hidden")
            trainingNextWord(trainer)})

        inputMot.focus()
        inputMot.removeAttribute("readonly")
        inputMot.select()

}

function trainingNextWord(trainer){
    if(!startBtn.classList.contains("hidden")){trainingWord.classList.toggle("hidden")}
    if(!trainingWord.classList.contains("hidden")){trainingWord.classList.toggle("hidden")}
    if(!feedBack.classList.contains("hidden")){trainingWord.classList.toggle("hidden")}
    console.log("trainer._trainingCount === trainer.trainingMaxCount",trainer._trainingCount, trainer.trainingMaxCount,trainer._trainingCount === trainer.trainingMaxCount)
    if(trainer._trainingCount === trainer.trainingMaxCount){
        trainingWordSentence.classList.add("hidden")
        trainingWord.classList.add("hidden")
        feedBack.innerHTML = `<tr><b>Ton score final est de ${trainer._score}/${trainer.trainingMaxCount}</b></tr>`
    feedBack.innerHTML += trainer.renderResult()}
        else {
    trainingMaxCount.textContent = trainer.totalWordCount
    feedBack.classList.toggle("hidden")

    inputMot.value = ""
     hiddenTO(trainingWord)
 
       trainingWord.textContent =  trainer.getNextWord()
       //displayBtn.removeEventListener("click",clickHandlerTrainingBtn,{"once":true})
       validBtn.classList.toggle("hidden")
       nextBtn.classList.toggle("hidden")
    }
       inputMot.focus()
       inputMot.select()
  }



function handlerOnTrainingValidClick(trainer){
    if(inputMot.value){
    if(!inputMot.classList.contains("hidden")){inputMot.classList.toggle("hidden")}
    console.log("click")
    trainingWordSentence.classList.add("hidden")
    feedBack.classList.toggle("hidden")
    console.log(trainer._trainingCount)
    console.log({trainer})
    trainingCount.innerText = trainer._trainingCount
    console.log(`Il fallait écrire "${trainingWord.textContent}".`)
    console.log(`La réponse donnée est "${inputMot.value}".`)

    feedBack.innerHTML = `<p>Ta réponse est : <br/><b>"${inputMot.value}"</b>,<br/> confirme pour passer au mot suivant.</p>`
  
    answerModify.classList.toggle("hidden")
    trainingWord.classList.toggle("hidden")
    validBtn.classList.toggle("hidden")
    nextBtn.addEventListener("click",function(){trainingNextWord(trainer)})
    trainingConfirm.classList.toggle("hidden")
  //  setTimeout(() => {trainingWord.textContent =  trainer.getNextWord()},3000)

  if(!trainingWord.classList.contains("hidden")){trainingWord.classList.toggle("hidden")}}
}

function handlerOnTrainingConfirmClick(trainer){
    let isCorrect = ""
    trainingWordSentence.classList.remove("hidden")
    console.log("nextBtn contains hidden",nextBtn.classList.contains("hidden"))
    nextBtn.classList.toggle("hidden")
    trainingConfirm.classList.toggle("hidden")
    feedBack.classList.remove("hidden")
answerModify.classList.add("hidden")
    if (inputMot.value === trainingWord.textContent){
               trainer.increaseScore()
    } 
    isCorrect = inputMot.value
    const lastWord = trainer._processingWord[0]
    console.log({lastWord})

    const newResult = [lastWord, isCorrect]
    console.log({newResult})
    trainer.newResult(newResult)
console.log("trainer.renderResult()",trainer.renderResult())
        trainingNextWord(trainer)
}

function answerReset(trainer){
    trainingWordSentence.classList.remove("hidden")
    if(!nextBtn.classList.contains("hidden")){nextBtn.classList.toggle("hidden")}
    feedBack.classList.toggle("hidden")
    answerModify.classList.add("hidden")
    validBtn.classList.toggle("hidden")
    trainingConfirm.classList.add("hidden")
        trainingWord.classList.toggle("hidden")
    inputMot.value = null
    if(!inputMot.classList.contains("hidden")){inputMot.classList.toggle("hidden")}

    hiddenTO(trainingWord,trainer)

}
async function clickHandlerTrainingBtn(){
    
    displayBtn.addEventListener("click",function() {    
       

                 hiddenTO(trainingWord)
        console.log("laListe",laListe)
            trainingCard.classList.toggle("hidden")
            theListe.classList.toggle("hidden")
           trainingWord.textContent =  listeMot22[getRandomArbitrary(0,4)]
           //displayBtn.removeEventListener("click",clickHandlerTrainingBtn,{"once":true})
           }
        ,{"once":true})
}

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

 