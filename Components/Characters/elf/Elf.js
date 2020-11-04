import Character from '../character/Character';

class Elf extends Character {
    constructor() {
        super();
        this.attack += 1;
        this.ability += 1;
        this.defence += 1;
        this.speed += 4;
        this.race = "elf";
        this.color = "green";
        console.log("Elf was created");
    }
}

export default Elf;