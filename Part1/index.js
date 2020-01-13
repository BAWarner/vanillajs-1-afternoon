var board = [];
var boardFull = 0;

function play(clickedId){

    let turn = document.getElementById('player').innerHTML;

    if(turn == 'X'){
        document.getElementById('player').innerHTML = 'O';
    }else{
        document.getElementById('player').innerHTML = 'X';
    }

    let clickedElement = document.getElementById(clickedId);
    clickedElement.innerText = turn;
    board[clickedId] = turn;

    const topLeft   = board[0];
    const topCenter = board[1];
    const topRight  = board[2];
    const midLeft   = board[3];
    const midCenter = board[4];
    const midRight  = board[5];
    const botLeft   = board[6];
    const botCenter = board[7];
    const botRight  = board[8];

    if(topLeft !== undefined && topLeft == topCenter && topCenter == topRight){
        if(confirm(`${topLeft} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }
    if(topLeft !== undefined && topLeft == midCenter && midCenter == botRight){
        if(confirm(`${topLeft} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }
    if(topRight !== undefined && topRight == midCenter && midCenter == botLeft){
        if(confirm(`${topRight} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }
    if(topLeft !== undefined && topLeft == midLeft && midLeft == botLeft){
        if(confirm(`${topLeft} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }
    if(topRight !== undefined && topRight == midRight && midRight == botRight){
        if(confirm(`${topRight} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }
    if(topCenter !== undefined && topCenter == midCenter && midCenter == botCenter){
        if(confirm(`${topCenter} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }
    if(midLeft !== undefined && midLeft == midCenter && midCenter == midRight){
        if(confirm(`${midLeft} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }
    if(botLeft !== undefined && botLeft == botCenter && botCenter == botRight){
        if(confirm(`${botLeft} is the winner! Do you want to reset?`)){
            resetBoard();
        }else{
            return;
        }
    }

    boardFull++;
    if(boardFull == 9 && board.includes(undefined) == false){
        if(confirm("It's a cat's game! \nWould you like to reset the board?")){
            resetBoard();
        }else{
            return;
        }
    }
}


function resetBoard(){
    document.getElementById('player').innerHTML = 'X';
    board = [];
    boardFull = 0;

    for(let j = 0; j < 9; j++){
        document.getElementById(j).innerHTML = '';
    }
}
