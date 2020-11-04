import Character from '../character/Character';

class Orc extends Character {
    constructor() {
        super();
        this.attack += 3;
        this.defence += 4;
        this.speed += 1;
        this.race = "orc";
        this.color = "red";
        console.log("Orc was created!");
    }
}

export default Orc;