const dicebtns = document.querySelectorAll("div button");
const inps = document.querySelectorAll("input");
const lastButton = document.getElementById("endButton");
const output = document.getElementsByClassName("output")[0];
const spans = document.querySelectorAll("span");

lastButton.disabled = true;
let count = 0;
for(let t of dicebtns){
    t.addEventListener("click" , performDice)
}

function performDice(event_details){
    count++;
    let clickedButton = event_details.target;
    let clickedButtonId = clickedButton.id;
        clickedButton.disabled = true;

    

    let possibleValues = [1,2,3,4,5,6];
    let randomIndex = parseInt(Math.random()*possibleValues.length); // 3
    let randomValue = possibleValues[randomIndex];
    clickedButtonId = randomValue;
    

    spans[count-1].innerText = randomValue;
    // console.log(spans[count-1]);
    if(count === dicebtns.length ){
        lastButton.disabled = false;
    }
}

lastButton.addEventListener("click" , displayResult);

function displayResult(event_details){
    let clickedButton = event_details.target;
    clickedButton.disabled = true;

    let highestScore = 0
    for(let t of spans){
         let score = t.innerText // <span>3</span>
         if(score> highestScore){
                highestScore = score
         }
    }

    let highestScorers = []
    for(let i = 0; i<spans.length; i++){
        let score = spans[i].innerText // <span>3</span>
        if(score ==  highestScore){
               highestScorers.push(i)
        }
   }
   console.log(highestScorers)
let namesOfWinner = ""
for(let t of highestScorers){ // t = 0,3
  namesOfWinner += inps[t].value + ",";
}
    output.innerHTML = namesOfWinner.slice(0,-1) + " won the game"
}
