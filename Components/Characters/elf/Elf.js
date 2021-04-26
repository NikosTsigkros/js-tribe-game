import Character from "../character/Character";

class Elf extends Character {
    constructor(name) {
        super();
        this.name = name;
        this.attack += 1;
        this.ability += 1;
        this.defence += 1;
        this.speed += 4;
        this.race = "elf";
        this.color = this.getRaceColor(this.race);
        console.log("Elf was created");
    }
}

export default Elf;
