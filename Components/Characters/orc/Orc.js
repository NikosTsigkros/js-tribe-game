import Character from "../character/Character";

class Orc extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.attack += 3;
        this.defence += 4;
        this.speed += 1;
        this.race = "orc";
        this.color = this.getRaceColor(this.race);
        console.log("Orc was created!");
    }
}

export default Orc;
