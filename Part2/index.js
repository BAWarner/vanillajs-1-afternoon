console.log('The house always wins!');

var cardId = document.getElementById('cardIdInput');
var assignClass = document.getElementById('assignClassStyles');

function setCard(){
    var cardValue = cardId.value.toLowerCase();
    var card = document.getElementById(cardValue);

    if(assignClass != ''){
        card.style.color = assignClass.value;
    }
}

function resetCards(){
    var aces = document.getElementsByTagName('section');

    console.log(aces.length);
    for(let i = 0; i < aces.length; i++){
        aces[i].style.color = '';
    }

}



