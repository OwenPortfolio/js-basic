const canvas = document.getElementById("display");
const context = canvas.getContext("2d");

const allLines = [];
allLines[0] = [];

let currentLine = allLines[0];

context.font = "15px Courier New";

function backspace() {
    currentLine.pop();
}

function blank(){
    context.fillStyle = "white";
    context.fillRect(0, 0, 450, 250);
    context.fillStyle = "black";
}

function enter(){
    allLines.unshift([]);
    currentLine = allLines[0];
}

function draw(){
    blank();

    let verticalPosition = 245;

    for(let i = 0; i < allLines.length; i++){
        context.fillText(allLines[i].join(""), 5, verticalPosition);
        verticalPosition = verticalPosition - 10;
    }
}

function handleKeyboardInput(e) {
    blank();
    console.log(e.keyCode);

    if(currentLine.length > 48){
        enter();
    }

    if (e.keyCode == 8) {
        backspace();
    } else if (e.keyCode == 13) {
        enter();
    }
    else {
        currentLine.push(String.fromCharCode(e.keyCode));
    }   
    draw();

}

window.addEventListener("keydown", handleKeyboardInput, false);

