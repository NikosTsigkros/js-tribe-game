import Character from '../character/Character';

class Human extends Character {
    constructor() {
        super();
        this.attack += 5;
        this.defence += 2;
        this.speed += 2;
        this.race = "human";
        this.color = "blue";
        console.log("Human was created");
    }
}

export default Human;