import KnightImg from "../../../assets/images/knight.png";
import OrcImg from "../../../assets/images/orc.png";
import ElfImg from "../../../assets/images/elf.png";

class Character {
    constructor(name = "player", attack = 10, defence = 10, speed = 1) {
        this.name = name;
        this.position = {
            x: 0,
            y: null,
        };
        this.attack = attack;
        this.defence = defence;
        this.speed = speed;
        this.race = null;
        this.color = this.getRaceColor(this.race);
        console.log("Character Created!");
    }

    getRaceColor(race) {
        switch (race) {
            case "human":
                return "blue";
            case "orc":
                return "red";
            case "elf":
                return "green";
            default:
                return "yellow";
        }
    }

    getRaceImage(race) {
        switch (race) {
            case "human":
                return KnightImg;
            case "orc":
                return OrcImg;
            case "elf":
                return ElfImg;
            default:
                return null;
        }
    }

    show() {
        console.log(
            `Attack: ${this.attack}, Defence: ${this.defence}, Speed: ${this.speed}`
        );
    }

    draw(ctx, positionY) {
        this.position.y = positionY;
        // this.position.y = (this.position.y * this.defence - this.defence) * 10;
        this.position.y = this.position.y * 80 + 20;
        ctx.fillStyle = this.color;
        // ctx.fillRect(
        //     this.position.x,
        //     this.position.y,
        //     this.attack * 3,
        //     this.defence * 3
        // );
        ctx.font = "20px Arial";
        ctx.fillText(this.name, this.position.x, this.position.y);
        let img = new Image();
        img.src = this.getRaceImage(this.race);
        ctx.drawImage(img, this.position.x, this.position.y, 50, 50);

        // img.onload = function(x = this.position.x) {
        //     ctx.drawImage(img, x, 0, 100, 100);
        // };
    }

    move() {
        this.position.x += this.speed;
    }

    resetPosition() {
        this.position.x = 0;
    }
}

export default Character;
