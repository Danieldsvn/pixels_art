//requisito 1

let body = document.querySelector('body');
let h1Title = document.createElement('h1');
h1Title.id = 'title';
h1Title.innerText = 'Paleta de Cores';
body.appendChild(h1Title);

//requisito 2

// cria elemento div com id color-pallet
let divColorPalette = document.createElement('div');
divColorPalette.id = 'color-palette';
body.appendChild(divColorPalette);
// cria elementos div com class color
for (let i = 1; i <= 4; i += 1) {
    let colorDiv = document.createElement('div');
    colorDiv.className = 'color';
    colorDiv.style.border = 'solid black 1px';
    divColorPalette.appendChild(colorDiv);

}
let colorsToChoose = document.getElementsByClassName('color');
colorsToChoose[0].id = 'black';
colorsToChoose[0].innerText = "Preto";
colorsToChoose[0].style.backgroundColor = 'black';
colorsToChoose[0].style.color = 'white';
colorsToChoose[1].id = 'red';
colorsToChoose[1].innerText = "Vermelho";
colorsToChoose[1].style.backgroundColor = 'red';
colorsToChoose[2].id = 'green';
colorsToChoose[2].innerText = "Verde";
colorsToChoose[2].style.backgroundColor = 'green';
colorsToChoose[3].id = 'blue';
colorsToChoose[3].innerText = "Azul";
colorsToChoose[3].style.backgroundColor = 'blue';


//Requisito 3 e 6
window.onload = blackSet();

function blackSet() {
    let blackElement = document.getElementById('black');
    blackElement.classList.add('selected');
 };

 let colorsArray = document.getElementsByClassName('color');

 // Requisito 4
// Cria div pixel-board
 let divPixelBoard = document.createElement('div');
 divPixelBoard.id = 'pixel-board';
 body.appendChild(divPixelBoard);


// requisito 5: Está incorporado ao requisito 10

 // Cria elementos pixels 5x5
 function pixelsCreator() {
    for (let i = 1; i <= 5; i += 1) {
        let divPixelBoardLine = document.createElement('div');
        divPixelBoardLine.className = 'pixel-board-line';
        divPixelBoard.appendChild(divPixelBoardLine);
        for (let j = 1; j <= 5; j += 1) {
            let divPixel = document.createElement('div');
            divPixel.className = 'pixel';
            divPixelBoardLine.appendChild(divPixel);
        }  
    }
 }
 pixelsCreator();



 // Requisito 6: (está junto com o requisito 3)

 // Requisito 7

 // Prepara a seleção de cores para aplicar nos pixels.

 function changeColor() {    
    for (let i = 0; i < colorsToChoose.length; i += 1) {   
        colorsToChoose[i].addEventListener('click', function(event){
        let colorSelected = document.querySelector('.selected');   
        colorSelected.className = 'color';
        event.target.className = 'color selected';        
    }  
    )
}
}; 

// Requisito 8

// Aplica cores nos pixels por clique conforme cor selecionada.
changeColor();
let pixelCollection = document.getElementsByClassName('pixel');

function colorPixel() {
    for (let i = 0; i < pixelCollection.length; i += 1) {
        pixelCollection[i].addEventListener('click', function(event) {
            let colorSelected = document.querySelector('.selected').id;
            let pixel = event.target;
            pixel.style.backgroundColor = colorSelected;
        })
    }
    
};

colorPixel();

// Requisito 9
// Cria botão que  limpa os pixels e o torna branco novamente.


let cleanButton = document.createElement('button');
cleanButton.id = 'clear-board';  
cleanButton.innerText = 'Limpar';
divColorPalette.after(cleanButton);

cleanButton.addEventListener('click', function() {
    let board = document.getElementsByClassName('pixel');
    for (i = 0; i < board.length; i += 1) {
        board[i].style.backgroundColor = 'white';
    }
});

 // Requisito 10:
 // Cria input para definir tamanho do quadro

 let input = document.createElement('input');
 input.id = 'board-size';
 input.placeholder = 'Tamanho do quadro';
 input.type = 'number';
 input.min = '0';
 divColorPalette.after(input);

 // Cria botão para implementar o input

 let vqvButton = document.createElement('button');
 vqvButton.id = 'generate-board';
 vqvButton.innerText = 'VQV'
 input.after(vqvButton);

// Cria quadro baseado no valor do input usando o botão VQV. 

function makeBoard() {
vqvButton.addEventListener('click', function pixelsCreator() {
    let allPixels = document.getElementsByClassName('pixel')
    for (let k = allPixels.length - 1; k >= 0; k -= 1) {
        allPixels[k].remove();
    }    
    if ( input.value.length == 0) {
        return alert('Board inválido!');
    }    
    else {
        let boardSize = input.value;
        if (input.value < 5) {
            boardSize = 5;
        }
        if (input.value > 50) {
            boardSize = 50;
        }        
        for (i = 1; i <= boardSize; i += 1) {
            let divPixelBoardLine = document.createElement('div');
            divPixelBoardLine.className = 'pixel-board-line';
            divPixelBoard.appendChild(divPixelBoardLine);
            for (j = 1; j <= boardSize; j += 1) {
                let divPixel = document.createElement('div');
                divPixel.className = 'pixel';
                divPixelBoardLine.appendChild(divPixel);
            }  
        }
        colorPixel();
    }
 } )
};

makeBoard();
 
 