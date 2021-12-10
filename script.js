
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
