const listesMots = [
    {"id":14,"liste":["le soir","le matin","le midi","beau","un oiseau"]},
    {"id":15,"liste":["le chapeau","bonhomme","la fleur","un gâteau","il a","elle a"]},
    {"id":16,"liste":["le mois","la chambre","l'année","mes","demain"]}
]

export class Training {
    constructor(cardId){
this.trainingCard = document.createElement("div")
this.trainingCard.classList = "relative flex flex-col items-center hidden w-1/4 p-4 font-thin align-middle shadow-sm max-md:w-3/4 shadow-amber-400 bg-lime-200"
this.trainingCard.id = cardId

const traingNextWord = document.createElement("span")
traingNextWord.id = "#next-word"

this.trainingCountBox = document.createElement("div")
this.trainingCountBox.classList = "absolute top-0 right-0 flex flex-row float-right"
this.trainingCountBox.id = "training-count-div"

this.trainingCount = document.createElement("span")
this.trainingCount.id = "#training-count"

this.trainingMaxCount = document.createElement("span")
this.trainingMaxCount.id = "#training-max-count"

const startButton = document.createElement("button")
startButton.id = "#training-start"
startButton.classList = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const validButton = document.createElement("button")
validButton.id = "#training-valid"
validButton.classList = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const nextButton = document.createElement("button")
nextButton.id = "#training-next"
nextButton.classList = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const modifyButton = document.createElement("button")
modifyButton.id = "#answer-modify"
modifyButton.classList = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const confirmButton = document.createElement("button")
confirmButton.id = "#training-confirm"
confirmButton.classList = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const feedBack = document.createElement("div")
feedBack.id = "#training-feedback"

const wordInput = document.createElement("input")
wordInput.id = "#word-input"
wordInput.classList = "flex items-center text-xl font-semibold rounded shadow-sm w-fit"

this.trainingCard.append(traingNextWord)
this.trainingCountBox.append(this.trainingCount)
this.trainingCountBox.append(this.trainingMaxCount)
this.trainingCard.append(this.trainingCountBox)
this.trainingCard.append(startButton)

}

    openTrainingCard(){
return this.trainingCard
    }
}

export class TrainingCard {

    listesMots = listesMots
    
    constructor(cardId){

        
        this.trainingCard = document.createElement("div")
        this.trainingCard.classList = "relative flex flex-col items-center w-1/2 md:w-3/4"
this.trainingCard.innerHTML = `
<div id="${cardId}" 
class="relative flex flex-col items-center w-1/4 h-auto 
p-4 font-thin align-middle shadow-sm max-md:w-3/4 shadow-amber-300/80 bg-lime-300">

    <div id="training-count-box" class="absolute top-0 right-0 flex flex-row float-right">
        <div id="training-counter"></div>
        <span>/</span>
        <div id="training-max-count"></div>
    </div>

    <p id="explanations" class="flex items-center text-xl font-semibold text-center rounded shadow-sm w-fit">
    Lis le mot puis réécris le lorsqu'il disparait.</p>

    <select name="list" id="training-list-selector">
    </select>

    <p id="selected-list"></p>

    <p id="training-next-word" class="flex items-center text-xl font-semibold rounded shadow-sm w-fit">
    Mot à écrire : </p>
    
    <p class="text-xl" id="le-mot"></p>

    <div class="z-10 flex flex-col items-center p-3 m-3 text-center align-middle 
    rounded-xl bg-amber-200/70 w-fit" id="training-feedback"></div>

    <input readonly="readonly" autocapitalize="off" autocomplete="off" spellcheck="false" 
    class="text-xl text-center" type="text" placeholder="écris ce mot~" id="training-user-input">
    
    <div class="flex flex-row" id="training-buttons">
        <button class="p-2 m-3 bg-yellow-300 rounded-md shadow-md" 
        id="training-start">Commencer</button>

        <button class="p-2 m-3 bg-yellow-300 rounded-md shadow-md" 
        id="training-valid">Valider</button>

        <button class="p-2 m-3 bg-yellow-300 rounded-md shadow-md" 
        id="training-next">Suivant</button>

        <button class="p-2 m-3 bg-yellow-300 rounded-md shadow-md" 
        id="training-confirm">Confirmer</button>

        <button class="p-2 m-3 bg-yellow-300 rounded-md shadow-md" 
        id="training-modify">Modifier</button>
    </div>

</div>
`

this.trainingNextWord = this.trainingCard.querySelector("#training-next-word")

this.explanations = this.trainingCard.querySelector("#explanations")

this.trainingList = this.trainingCard.querySelector("#training-list-selector")

this.selectedList = this.trainingCard.querySelector("#selected-list")

this.trainingCountBox = this.trainingCard.querySelector("#training-count-box")

this.trainingCounter = this.trainingCard.querySelector("#training-counter")

this.trainingMaxCount = this.trainingCard.querySelector("#training-max-count")

this.boxButtons = this.trainingCard.querySelector("#training-buttons")

this.allButtons = this.trainingCard.querySelectorAll("#training-buttons button")

this.startButton = this.trainingCard.querySelector("#training-start")

this.validButton = this.trainingCard.querySelector("#training-valid")

this.nextButton = this.trainingCard.querySelector("#training-next")

this.modifyButton = this.trainingCard.querySelector("#training-modify")

this.confirmButton = this.trainingCard.querySelector("#training-confirm")

this.trainingFeedBack = this.trainingCard.querySelector("#training-feedback")

this.userInput = this.trainingCard.querySelector("#training-user-input")

this.displayElement = [this.explanations,this.trainingNextWord,this.trainingCountBox,this.startButton,this.validButton,this.modifyButton,this.confirmButton,this.nextButton,this.trainingFeedBack,this.userInput]


this.initializeEventListenerOnButtonClick()
}

    hideAllMobileElement(){
        this.displayElement.forEach(element => element.classList.add("hidden"))
    }

    trainingCardLauncher(){
        this.hideAllMobileElement()
        this.startButton.classList.remove("hidden")
        this.explanations.classList.remove("hidden")
        Object.values(listesMots)
        .map(mot => mot["id"])
        .forEach(option => {
            const optionList = document.createElement("option")
            optionList.value = option
            optionList.textContent = option 
            this.trainingList.append(optionList)})
            this.selectedList.textContent = listesMots.filter(mot => 
                mot.id == this.trainingList.value)[0].liste
                console.log(listesMots.filter(mot => 
                    mot.id == this.trainingList.value))
document.querySelector("#main-view").append(this.trainingCard)
    }



    initializeEventListenerOnButtonClick(){
        this.startButton.addEventListener("click",() => {this.handlerEventOnStartClick()})
        this.validButton.addEventListener("click",() => {this.handlerEventOnValidClick()})
        this.nextButton.addEventListener("click",() => {this.handlerEventOnNextClick()})
        this.modifyButton.addEventListener("click",() => {this.handlerEventOnModifyClick()})
        this.confirmButton.addEventListener("click",() => {this.handlerEventOnConfirmClick()})
    }

    handlerEventOnStartClick(){
        this.hideAllMobileElement()
        this.trainingNextWord.classList.remove("hidden")
        this.validButton.classList.remove("hidden")

    }

    handlerEventOnValidClick(){
        console.log("click")
    }

    handlerEventOnNextClick(){
        console.log("click")
    }

    handlerEventOnModifyClick(){
        console.log("click")
    }

    handlerEventOnConfirmClick(){
        console.log("click")
    }
}

export class TrainingSession {
    _trainingCount = 0
    constructor(wordList,name){
        this.wordList = wordList
        this.name = name
    }
    _remainingWord = undefined
    _processingWord = ""
    _score = 0
    _result = []
    getRemainingWord(){
        
        if(!this._remainingWord){this._remainingWord = [...this.wordList]}
        console.log("START getRemainingWord return this._remainingWord ...",this._remainingWord)
        return this._remainingWord
    }

    Initialize(){
        
    console.log(this.wordList)
    }

    get totalWordCount(){
        return this.wordList.length
    }

    increaseScore(){
        this._score ++
    }
        get trainingMaxCount(){
            return this.wordList.length
        }
    trainingCountIncrement(){
        this._trainingCount += 1
    }

    newResult(result){
this._result.push(result)
    }

    get trainingCountNumber(){
        return this._trainingCount
    }

    renderResult(){
        const result = []
        console.log("this._result",this._result)
        this._result.forEach(res => {
            const [toDo, Do] = res
            console.log("res",res,{toDo},{Do})
            const isCorrect = toDo === Do ? "égale à" : "différent de"
            const isCorrectClass = toDo === Do ? "bg-green-500" : "bg-red-500"
            result.push(`<p class="${isCorrectClass} p-2 rounded-md ring-2"><b>${Do}</b> est ${isCorrect} <b>${toDo}</b></p>`)
        })
        const joinResult = result.join(",").replaceAll(",","")
        console.log({joinResult})
        return joinResult
    }
    getNextWord(){
   
        this.trainingCountIncrement()
        if(!this._remainingWord){this._remainingWord = [...this.wordList]}
const ramdom = this.getRandomArbitrary(1, this._remainingWord.length)  - 1
//console.log({ramdom})      
this._processingWord = this._remainingWord.splice(ramdom,1)
console.log("START getNextWord return this._processingWord   : ",this._processingWord )
return this._processingWord    
}

    getRandomArbitrary(min, max) {
        return Math.round(Math.random() * (max - min) + min);
    }
}

