import Characters from './Components/Characters/characters';

const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;

const createCanvas = () => {
    let canvas = document.createElement("canvas");
    canvas.id = "can";
    canvas.width=CANVAS_WIDTH;
    canvas.height=CANVAS_HEIGHT;
    document.body.appendChild(canvas);
}

const clearCanvas = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
}

// EXECUTE
// Create the Elements
const app = document.getElementById("app");
app.style.textAlign = "center";
const btn = document.createElement("button");
btn.appendChild(document.createTextNode('Start Race'));
btn.style.display = "block";
btn.style.margin = "10px";
document.body.appendChild(btn);

// Create Canvas
createCanvas();
const canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

// Create Players
let Nikos = new Characters.character;
let Sonia = new Characters.human;
let Suzan = new Characters.orc;
let Raya = new Characters.elf;

// The Loop
const myInterval = setInterval(() => {
    clearCanvas();

    Nikos.show();
    Nikos.draw(ctx, 1);
    Nikos.move();

    Sonia.show();
    Sonia.draw(ctx, 2);
    Sonia.move();

    Suzan.show();
    Suzan.draw(ctx, 3);
    Suzan.move();

    Raya.show();
    Raya.draw(ctx, 4);
    Raya.move();
}, 100);