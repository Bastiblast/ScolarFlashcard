const actualDate = new Date()
const numeroSemaine = getWeekNumber(actualDate)
const listeMot22 = ["le soir","le matin","le midi","beau","un oiseau"]

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

const displayCard = document.querySelector("#display-card")
const messageWeekNumber = displayCard.querySelector("#message-week-number")
messageWeekNumber.textContent += numeroSemaine
const ulListe = displayCard.querySelector("#liste-mots")
console.log(ulListe)
const newDiv = document.createElement("div")
newDiv.textContent = listeMot22.join(" - ")
ulListe.append(newDiv)

const TrainingCard = document.querySelector("#training-card")
const motAEcrire = TrainingCard.querySelector("#mot-a-ecrire")


const displayBtn = displayCard.querySelector("#display-btn")

displayBtn.addEventListener("click", () => {
TrainingCard.classList.toggle("hidden")
motAEcrire.textContent = listeMot22[getRandomArbitrary(0,4)]
})

function getRandomArbitrary(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  console.log("getRandomArbitrary",getRandomArbitrary(0,4))