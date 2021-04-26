import Character from "../character/Character";

class Human extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.attack += 5;
        this.defence += 2;
        this.speed += 2;
        this.race = "human";
        this.color = this.getRaceColor(this.race);
        console.log("Human was created");
    }
}

export default Human;
