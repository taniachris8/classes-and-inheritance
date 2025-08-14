export default class Character {
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.types = [
            "Bowerman",
            "Swordsman",
            "Magician",
            "Daemon",
            "Undead",
            "Zombie",
        ];
        this.health = 100;
        this.level = 1;

        if (
            (typeof this.name !== "string" ||
               this.name.length < 2 ||
               this.name.length > 10) ||
             !this.types.includes(this.type))
        {
            throw new Error("Некорректные данные");
        }
    }
}