//requisito 1

let body = document.querySelector('body');
let h1Title = document.createElement('h1');
h1Title.id = 'title';
h1Title.innerText = 'Paleta de Cores';
body.appendChild(h1Title);

//requisito 2

// cria elemento div com id color-pallet
let divColorPalett = document.createElement('div');
divColorPalett.id = 'color-palett';
body.appendChild(divColorPalett);
// cria elementos div com class color
for (let i = 1; i <= 4; i += 1) {
    let colorSpan = document.createElement('span');
    colorSpan.className = 'color';
    colorSpan.style.border = 'solid black 1px';
    divColorPalett.appendChild(colorSpan);

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


// requisito 5

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


let button = document.createElement('button');
button.id = 'clear-board';  
button.innerText = 'Limpar';
divColorPalett.after(button);

button.addEventListener('click', function() {
    let board = document.getElementsByClassName('pixel');
    for (i = 0; i < board.length; i += 1) {
        board[i].style.backgroundColor = 'white';
    }
});

 