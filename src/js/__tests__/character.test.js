import Character from "../Character";

describe("testing class properties", () => {
    test("Testing if the object was created correctly", () => {
        const character = new Character("Peter", "Magician");
        const resultObj = {
            health: 100,
            level: 1,
            name: "Peter",
            type: "Magician",
        };

        expect(character).toEqual(resultObj);
    });

    test("Name should be a string", () => {
        const character = new Character("Elandir", "Bowerman", 10, 16);
        expect(typeof character.name).toEqual("string");
    });

    test("Name should be longer than 2 characters", () => {
        expect(() => new Character("E", "Bowerman")).toThrow(Error);
    });

    test("Name should be shorter than 10 characters", () => {
        expect(() => new Character("Hippopotamus", "Bowerman")).toThrow(
            Error
        );
    });

    test(
        "Type should be one of the following: 'Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'", () => {
            expect(() => new Character("Kitty", "Cat")).toThrow(
                Error
            );
        }
    );
});

describe("testing levelUp function", () => {
    let character;

    beforeEach(() => {
        character = new Character("Black", "Bowerman");
        character.attack = 40;
        character.defence = 10;
        character.levelUp();
    });

    test("levelUp func should increase level by 1 ", () => {
        expect(character.level).toBe(2);
    });

    test("levelUp func should increase attack by 20%", () => {
        expect(character.attack).toBe(48);
    });

    test("levelUp func should increase defence by 20%", () => {
        expect(character.defence).toBe(12);
    });

    test("levelUp func should make health to be equal to 100", () => {
        expect(character.health).toBe(100);
    });

    test("levelUp func should throw an error if health is equal to 0", () => {
        character.health = 0;
        expect(() => character.levelUp()).toThrow(Error);
    });
});

describe("testing damage function", () => {
    let character;

    beforeEach(() => {
        character = new Character("Carl", "Undead");
        character.attack = 10;
        character.defence = 40;
    });

    test("Should calculate health correctly", () => {
        character.damage(10);
        expect(character.health).toBeCloseTo(94);
    });

    test("Should change health to 0 if health is < 0", () => {
        character.health = -1;
        character.damage(1);
        expect(character.health).toBe(0);
    });
});