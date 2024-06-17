 export class Training {
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