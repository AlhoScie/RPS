let nGames = 0;
let nScorePlayer = 0;
let nScoreComp = 0;

function getComputerChoice() {
    let cComputerChoice = '';
    let nRandom = Math.floor(Math.random() * 10) % 3;
    switch(nRandom) {
        case 0: cComputerChoice = "R";
            break;
        case 1: cComputerChoice = "P";
            break; 
        case 2: cComputerChoice = "S";
            break;            
    }

    console.log('Computer: ' + cComputerChoice);
    return cComputerChoice;
}

/*
function getPlayerChoice() {
    let cPlayerChoice = prompt("R, P or S?").toUpperCase();
    return cPlayerChoice;
} */


function playOneTurn(cChoice) {
    let cComp   = getComputerChoice();
    let cPlayer = cChoice;
    let cWinner = "";

    if (cPlayer == 'R') {
        switch (cComp) {
            case 'R': cWinner = 'D';
                break;
            case 'P': cWinner = 'C';
                break;
            case 'S': cWinner = 'P';
                break;
        }
    } else if (cPlayer == 'P') {
        switch(cComp) {
            case 'R': cWinner = 'P';
                break;
            case 'P': cWinner = 'D';
                break;
            case 'S': cWinner = 'C';
                break;
        }} 
        else if ( cPlayer == 'S') {
            switch(cComp) {
                case 'R': cWinner = 'C';
                    break;
                case 'P': cWinner = 'P';
                    break;
                case 'S': cWinner = 'D';
                    break;
            }
    }
    nGames += 1;
    let resultDiv = document.querySelector('.result');
    let playerDiv = document.querySelector('.player');
    let compDiv = document.querySelector('.computer');
    

    let cPlayerResult = `Player: ${cPlayer}    ---   `;
    playerDiv.innerHTML = (cPlayerResult);
    
    let cCompResult = `Computer: ${cComp}`;
    cCompResult += `  =>   winner: ${cWinner}`;
    compDiv.innerHTML = (cCompResult);

    let cResultTxt = '<br/><br/>' + `player: ${ cPlayer } ` + ' --- ' + `computer: ${cComp}`;
    resultDiv.innerHTML = ( cResultTxt);
    return cWinner;

}


function game(cChoicePlayer) {

    let cResult = playOneTurn(cChoicePlayer);

    if (cResult === 'P') {
        nScorePlayer += 1; 
        }
    else if (cResult === 'C') {
            nScoreComp += 1; 
        }
    let resultDiv = document.querySelector('.result');
    cResultTxt = '<br/>' + `turn: ${nGames} ---` + ` player: ${nScorePlayer}  --- computer: ${nScoreComp}`;
    resultDiv.innerHTML = ( cResultTxt )  ;       

    if( nGames >= 5) {
        let cWinner = 'Draw!';
        if ( nScorePlayer > nScoreComp) {
            cWinner = 'Player';
        } else if (nScoreComp > nScorePlayer) {
            cWinner = 'Computer';
        }
        
        cResultTxt = cResultTxt + '<br/>' + `game-winner: ${cWinner}`;
        resultDiv.innerHTML = ( cResultTxt )  ;      
        nGames = 0;
        nScoreComp = 0;
        nScorePlayer = 0;
    }
    

}
