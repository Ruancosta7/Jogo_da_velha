let x = document.querySelector('.x');
let o = document.querySelector('.o');
let allBoxes = document.querySelectorAll('.box');
let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#ia-player');
let messageContainer = document.querySelector('#message');
let messageText = document.querySelector('#message h2');
let secondPlayer;



//contador de jogadas
let player1 = 0;
let player2 = 0;




//evendo click nas caixas

for (let i = 0; i < allBoxes.length; i++) {

    allBoxes[i].addEventListener('click', () => {

        let el = checkEl(player1, player2);

        if (allBoxes[i].childNodes.length == 0) {
            let cloneEl = el.cloneNode(true);

            allBoxes[i].appendChild(cloneEl)

            if (player1 == player2) {
                player1++;

                if (secondPlayer == 'ia-player') {
                    console.log('sssss');
                    iaplay();
                    player2++;
                }
            }
            else {
                player2++;
            }
        }
        checkWinner()
    })
}
btn1.addEventListener('click', () => {
    document.querySelector('#buttons').classList.add('display-none')
    document.querySelector('#container-grid').classList.remove('hide');
    document.querySelector('#score-container').classList.remove('hide')
})

btn2.addEventListener('click', () => {
    document.querySelector('#buttons').classList.add('display-none')
    document.querySelector('#container-grid').classList.remove('hide');
    document.querySelector('#score-container').classList.remove('hide')
    secondPlayer = 'ia-player';
})


function checkEl(player1, player2) {
    if (player1 == player2) {
        el = x
    }
    else {
        el = o
    }
    return el;
}
function checkWinner() {
    let block1 = document.querySelector('#block-1');
    let block2 = document.querySelector('#block-2');
    let block3 = document.querySelector('#block-3');
    let block4 = document.querySelector('#block-4');
    let block5 = document.querySelector('#block-5');
    let block6 = document.querySelector('#block-6');
    let block7 = document.querySelector('#block-7');
    let block8 = document.querySelector('#block-8');
    let block9 = document.querySelector('#block-9');


    if (block1.childNodes.length > 0 && block2.childNodes.length > 0 && block3.childNodes.length) {

        let block1Child = block1.childNodes[0].className;
        let block2Child = block2.childNodes[0].className;
        let block3Child = block3.childNodes[0].className;


        if (block1Child == 'x' && block2Child == 'x' && block3Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block1Child == 'o' && block2Child == 'o' && block3Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }


    }
    if (block4.childNodes.length > 0 && block5.childNodes.length > 0 && block6.childNodes.length) {
        let block4Child = block4.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;

        if (block4Child == 'x' && block5Child == 'x' && block6Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block4Child == 'o' && block5Child == 'o' && block6Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }

    }


    if (block7.childNodes.length > 0 && block8.childNodes.length > 0 && block9.childNodes.length) {
        let block7Child = block7.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block7Child == 'x' && block8Child == 'x' && block9Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block7Child == 'o' && block8Child == 'o' && block9Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }

    }
    //vertical 1
    if (block1.childNodes.length > 0 && block4.childNodes.length > 0 && block7.childNodes.length) {
        let block1Child = block1.childNodes[0].className;
        let block4Child = block4.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block1Child == 'x' && block4Child == 'x' && block7Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block1Child == 'o' && block4Child == 'o' && block7Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }
    }
    //vertical2
    if (block2.childNodes.length > 0 && block5.childNodes.length > 0 && block8.childNodes.length) {
        let block2Child = block2.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block8Child = block8.childNodes[0].className;

        if (block2Child == 'x' && block5Child == 'x' && block8Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block2Child == 'o' && block5Child == 'o' && block8Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }
    }
    //vertical3
    if (block3.childNodes.length > 0 && block6.childNodes.length > 0 && block9.childNodes.length) {
        let block3Child = block3.childNodes[0].className;
        let block6Child = block6.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block3Child == 'x' && block6Child == 'x' && block9Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block3Child == 'o' && block6Child == 'o' && block9Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }
    }
    //diagonal1
    if (block1.childNodes.length > 0 && block5.childNodes.length > 0 && block9.childNodes.length) {
        let block1Child = block1.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block9Child = block9.childNodes[0].className;

        if (block1Child == 'x' && block5Child == 'x' && block9Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block1Child == 'o' && block5Child == 'o' && block9Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }
    }
    //diagonal2
    if (block3.childNodes.length > 0 && block5.childNodes.length > 0 && block7.childNodes.length) {
        let block3Child = block3.childNodes[0].className;
        let block5Child = block5.childNodes[0].className;
        let block7Child = block7.childNodes[0].className;

        if (block3Child == 'x' && block5Child == 'x' && block7Child == 'x') {
            console.log('x venceu')
            declareWinner('x')
        }
        else if (block3Child == 'o' && block5Child == 'o' && block7Child == 'o') {
            console.log('o venceu')
            declareWinner('o')
        }
    }
    let counter = 0;

    for (let i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].childNodes[0] != undefined) {
            counter++;
        }
    }

    if (counter == 9) {
        declareWinner('Deu Velha!')
    }

}

//deu velha



function declareWinner(winner) {

    let scoreBoardX = document.querySelector('#player1Count');
    let scoreBoardO = document.querySelector('#player2Count');
    let message = '';

    if (winner == 'x') {
        scoreBoardX.textContent = parseInt(scoreBoardX.textContent) + 1;
        message = 'O jogador 1 venceu!'
    }
    else if (winner == 'o') {
        scoreBoardO.textContent = parseInt(scoreBoardO.textContent) + 1;
        message = 'O jogador 2 venceu!'
    }
    else {
        message = 'Deu velha!';
    }
    messageText.innerHTML = message;
    messageContainer.classList.remove('hide');

    setTimeout(() => {
        messageContainer.classList.add('hide');

    }, 2000)

    //zera as jogadas
    player1 = 0;
    player2 = 0;

    let boxestoRemove = document.querySelectorAll('.box div');
    for (let i = 0; i < boxestoRemove.length; i++) {
        boxestoRemove[i].parentNode.removeChild(boxestoRemove[i]);
    }


}
function iaplay() {
    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;
    for (let i = 0; i < allBoxes.length; i++) {
        let randomNumber = Math.floor(Math.random() * 5);
        if (allBoxes[i].childNodes[0] == undefined) {
            if (randomNumber <= 1) {
                allBoxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        } else {
            filled++;
        }
    }
    if (counter == 0 && filled < 9) {
        iaplay();
    }
}