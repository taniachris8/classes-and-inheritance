export default class Character {
    constructor(name, type) {
        const types = [
            "Bowerman",
            "Swordsman",
            "Magician",
            "Daemon",
            "Undead",
            "Zombie",
        ];

        if (typeof name !== "string" || name.length < 2 || name.length > 10) {
            throw new Error("Некорректное имя персонажа");
        } else {
            this.name = name;
        }

        if (!types.includes(type)) {
            throw new Error("Некорректный тип персонажа");
        } else {
            this.type = type;
        }

        this.health = 100;
        this.level = 1;
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("Нельзя повысить левел умершего");
        } else {
            this.level++;
            this.attack = this.attack * 1.2;
            this.defence = this.defence * 1.2;
            this.health = 100;
        }
    }

    damage(points) {
        if (this.health >= 0) {
            this.health = this.health - points * (1 - this.defence / 100);
        } else {
            this.health = 0;
        }
    }
}