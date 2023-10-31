function getComputerChoice() {
    let cComputerChoice = "";
    let nRandom = Math.floor(Math.random() * 10) % 3;
    switch(nRandom) {
        case 0: cComputerChoice = "R";
            break;
        case 1: cComputerChoice = "P";
            break; 
        case 2: cComputerChoice = "S";
            break;            
    }

    // console.log('Computer: ' + cComputerChoice);
    return cComputerChoice;
}

function getPlayerChoice() {

    let cPlayerChoice = prompt("R, P or S?").toUpperCase();
    return cPlayerChoice;
}


function playOneTurn(choice) {
    let cComp   = getComputerChoice();
    let cPlayer = choice;
    let cWinner = "";

    console.log('p: ' + cPlayer);
    console.log('c: ' + cComp);
    //let cPlayer = getPlayerChoice();


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
    // console.log( `Player: ${cPlayer}  --- Computer: ${cComp}  --- Winner: ${cWinner}`);
    return cWinner;
}


function game(choiceP) {
    //let choiceP = choice;
    console.log('choice: ' + choiceP);
    let scoreP = 0;
    let scoreC = 0;
    //playOneTurn(choiceP);
    
    //for (let i=1; i<=5; i++) {
    for (let i=1; i<=1; i++) {        
        let result = playOneTurn(choiceP);
        if (result === 'P') {
            scoreP += 1; 
            }
        else if (result === 'C') {
            scoreC += 1; 
        }
        console.log(`round: ${i} --- result  Player: ${scoreP}  --- Computer: ${scoreC}`);         
    } 
    
    console.log(`endresult  Player: ${scoreP}  --- Computer: ${scoreC}`);
}

