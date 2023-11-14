const playerChoice=document.querySelector(".player");
const computerChoice=document.querySelector(".computer");
const playerResult=document.querySelector(".result");
const buttons=document.querySelectorAll("#btn");
const resetButton=document.querySelector(".reset");

let player;
let computer;
let result;

buttons.forEach(button => button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerChoice.textContent = `Player: ${player}`;
    computerChoice.textContent = `Computer: ${computer}`;
    playerResult.textContent = checkResult();
}));


function computerTurn(){
    const randNum=Math.floor(Math.random()*3)+1;
    switch(randNum){
        case 1:
            computer="Rock";
            break;
        case 2:
            computer="Paper";
            break;
        case 3:
            computer="Scissors";
            break;        
    }
}

function checkResult(){
    if(player==computer){
        return "Draw";
    }else if(computer=="Rock"){
        return (player=="Paper")? "You win!!":"You lose!!"
    }else if(computer=="Paper"){
        return (player=="Scissors")? "You win!!":"You lose!!"
    }else if(computer=="Paper"){
        return (player=="Scissors")? "You win!!":"You lose!!"
    } 
    rePlay();

}
function rePlay(){
    if(player=="You win!!" || player=="You lose!!"){
        resetButton.innerText = 'PlayAgain';
        resetButton.style.display = 'flex'
        resetButton.addEventListener('click',() => {
            window.location.reload();
        })
    }
}