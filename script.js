

// Seleciona cor preta ao carregar a página
window.onload = blackSet();

function blackSet() {
    let blackElement = document.getElementById('black');
    blackElement.classList.add('selected');
 };

 let colorsArray = document.getElementsByClassName('color');

// Prepara a seleção de cores para aplicar nos pixels.
function changeColor() {    
    for (let i = 0; i < colorsArray.length; i += 1) {   
        colorsArray[i].addEventListener('click', function(event){
        let colorSelected = document.querySelector('.selected');   
        colorSelected.className = 'color';
        event.target.className = 'color selected';        
    }  
    )
}
};

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

//Cria botão que  limpa os pixels e o torna branco novamente.

let button = document.getElementById('clear-board');

button.addEventListener('click', function() {
    let board = document.getElementsByClassName('pixel');
    for (i = 0; i < board.length; i += 1) {
        board[i].style.backgroundColor = 'white';
    }
});

