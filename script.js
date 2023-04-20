let colorBtn = document.querySelector("#colorBtn");
let rainbowBtn = document.querySelector("#rainbowBtn");
let eraserBtn = document.querySelector("#eraserBtn");
let clearBtn = document.querySelector("#clearBtn");
let sizeSlider = document.querySelector("#sizeSlider");
let sizeValue = document.querySelector(".size-value");
let board = document.querySelector('#board');
let colorPicker = document.querySelector("#colorPicker");
let selectedColor = "#000000";


colorBtn.addEventListener("click", function(e) {
    e.preventDefault(); 
    sizeSlider.addEventListener("input", function(){
        const size = sizeSlider.value;
        sizeValue.textContent = size + " x " + size;
        populateBoard(size);
        })
        colorBtn.classList.toggle("active");
    if (colorBtn.classList.contains("active")) {
      rainbowBtn.classList.remove("active");
      eraserBtn.classList.remove("active");
    }
  });

  window.addEventListener("load", function() {
    const size = sizeSlider.value;
    sizeValue.textContent = size + " x " + size;
    populateBoard(size);
    colorBtn.click();
});

  rainbowBtn.addEventListener("click", function() {
    sizeSlider.addEventListener("input", function(){
        const size = sizeSlider.value;
        sizeValue.textContent = size + " x " + size;
        populateBoard(size);
        clearBtn.addEventListener("click",function(){
            let squares = board.querySelectorAll("div");
            squares.forEach((div) => div.remove());
            board.style.backgroundColor = "#ededed";
            })
        })
    rainbowBtn.classList.toggle("active");
    if (rainbowBtn.classList.contains("active")) {
      colorBtn.classList.remove("active");
      eraserBtn.classList.remove("active");
    }
  });
  
clearBtn.addEventListener("click",function(){
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.backgroundColor = "#ededed";
    })


colorPicker.addEventListener("input", function() {
    selectedColor = colorPicker.value;
  });


eraserBtn.addEventListener("click", function() {
    eraserBtn.classList.toggle("active");
    if (eraserBtn.classList.contains("active")) {
      colorBtn.classList.remove("active");
      rainbowBtn.classList.remove("active");
    }
})




function populateBoard(size){
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size},1fr)`;
    board.style.gridTemplateRows = `repeat(${size},1fr)`;

    let amount = size * size;
    for(let i = 0; i <amount; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", function(e) {
            e.preventDefault();
            square.style.backgroundColor = selectedColor;
            if (rainbowBtn.classList.contains("active")) {
                let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
                square.style.backgroundColor = randomColor;
              }else if(eraserBtn.classList.contains("active")) {
                square.style.backgroundColor = "#ededed";
              }else {
                square.style.backgroundColor = selectedColor;
              }
          });
          
        board.insertAdjacentElement("beforeend", square);
    }
    

}







