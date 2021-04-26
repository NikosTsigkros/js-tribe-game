import Characters from "./Components/Characters/characters";

const players = ["Paul", "Goruk"];
const CANVAS_WIDTH = 800;
const CANVAS_HEIGHT = 500;
let intervalRun = false;

const createCanvas = () => {
    let canvas = document.querySelector("#can");
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    // document.body.appendChild(canvas);
};

const clearCanvas = () => {
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
};

// EXECUTE
// Create the Elements
createCanvas();

const app = document.getElementById("app");
app.style.textAlign = "center";

const btnStartRace = document.querySelector("#btnStartRace");
btnStartRace.style.display = "block";
btnStartRace.style.margin = "10px";

const btnStopRace = document.querySelector("#btnStopRace");
btnStopRace.style.display = "block";
btnStopRace.style.margin = "10px";

const btnResetRace = document.querySelector("#btnResetRace");
btnResetRace.style.display = "block";
btnResetRace.style.margin = "10px";

const createPlayer = (name, race) => {
    switch (race) {
        case "human":
            return new Characters.human(name);
        case "orc":
            return new Characters.orc(name);
        case "elf":
            return new Characters.elf(name);
        default:
            return null;
    }
};

const playerNameInput = document.querySelector("#playerName");
const playerRaceInput = document.querySelector("#playerRace");
const createPlayerBtn = document.querySelector("#createPlayerBtn");
createPlayerBtn.addEventListener("click", () => {
    let player = createPlayer(playerNameInput.value, playerRaceInput.value);
    players.push(player);
});

const deletePlayersBtn = document.querySelector("#deletePlayersBtn");
deletePlayersBtn.addEventListener("click", () => {
    players = [];
    drawPlayers();
});

btnStartRace.addEventListener("click", () => {
    intervalRun = true;

    const myInterval = setInterval(() => {
        if (intervalRun) {
            drawPlayers();
            players.forEach((player) => {
                player.move();
            });
        }
    }, 100);
});

btnStopRace.addEventListener("click", () => {
    intervalRun = false;
    drawPlayers();
});

btnResetRace.addEventListener("click", () => {
    intervalRun = false;
    Paul.resetPosition();
    Goruk.resetPosition();
    Raya.resetPosition();
    drawPlayers();
});

// Create Canvas
const canvas = document.getElementById("can");
let ctx = canvas.getContext("2d");

// Create Players
players[0] = new Characters.human("Paul");
players[1] = new Characters.orc("Goruk");
players[2] = new Characters.elf("Raya");

// The Loop
const myInterval = setInterval(() => {
    drawPlayers();
}, 100);

const drawPlayers = () => {
    if (players.length === 0) {
        clearCanvas();
    } else {
        clearCanvas();
        players.forEach((player, key) => {
            player.show();
            player.draw(ctx, key);
        });
    }
};
