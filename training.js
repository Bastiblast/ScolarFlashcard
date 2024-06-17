export class Training {
    constructor(){
const trainingCard = document.createElement("div")
trainingCard.id = "#training-card"
trainingCard.class = "relative flex flex-col items-center hidden w-1/4 p-4 font-thin align-middle shadow-sm max-md:w-3/4 shadow-amber-400 bg-lime-200"
const motAEcrire = document.createElement("span")
motAEcrire.id = "#le-mot"

const trainingCountBox = document.createElement("div")
trainingCountBox.id = "training-count-div"
trainingCountBox.class = "absolute top-0 right-0 flex flex-row float-right"

const trainingCount = document.createElement("span")
trainingCount.id = "#training-count"

const trainingMaxCount = document.createElement("span")
trainingMaxCount.id = "#training-max-count"

const validInput = document.createElement("button")
validInput.id = "#training-valid"
validInput.class = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const trainingNext = document.createElement("button")
trainingNext.id = "#training-next"
trainingNext.class = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const answerModify = document.createElement("button")
answerModify.id = "#answer-modify"
answerModify.class = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const trainingConfirm = document.createElement("button")
trainingConfirm.id = "#training-confirm"
trainingConfirm.class = "hidden p-2 m-3 bg-yellow-300 rounded-md shadow-md"

const feedBack = document.createElement("div")
feedBack.id = "#is-correct"

const inputMot = document.createElement("input")
inputMot.id = "#input-mot"
inputMot.class = "flex items-center text-xl font-semibold rounded shadow-sm w-fit"

}

    openTrainingCard(){

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

        get trainingMaxCount(){
            return this.wordList.length
        }
    trainingCountIncrement(){
        this._trainingCount += 1
    }

    get trainingCountNumber(){
        return this._trainingCount
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

