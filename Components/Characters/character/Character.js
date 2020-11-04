class Character {
    constructor(attack = 10, defence = 10, speed = 1) {
        this.position = {
            x: 0
        }
        this.attack = attack;
        this.defence = defence;
        this.speed = speed;
        this.color = "yellow"
        console.log("Character Created!");
    }

    show() {
        console.log(`Attack: ${this.attack}, Defence: ${this.defence}, Speed: ${this.speed}`);
    }

    draw(ctx, position) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.position.x, (position*this.defence - this.defence)*3, this.attack*3, this.defence*3);
    }

    move() {
        this.position.x += this.speed;
    }
}

export default Character;