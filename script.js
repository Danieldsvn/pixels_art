
window.onload = blackSet();

function blackSet() {
    let blackElement = document.getElementById('black');
    blackElement.classList.add('selected');
 };

 let colorsArray = document.getElementsByClassName('color');

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
changeColor();