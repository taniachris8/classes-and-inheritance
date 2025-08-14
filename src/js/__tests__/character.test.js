import Character from "../Character";

test("Name should be a string", () => {
    const character = new Character("Elandir", "Bowerman", 10, 16);
    expect(typeof character.name).toEqual("string");
});

test("Name should be longer than 2 characters", () => {
    expect(() => new Character("E", "Bowerman", 10, 16)).toThrow(Error);
});

test("Name should be shorter than 10 characters", () => {
    expect(() => new Character("Hippopotamus", "Bowerman", 10, 16)).toThrow(
        Error
    );
});

test(
    "Type should be one of the following: 'Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'", () => { 
        expect(() => new Character("Kitty", "Cat", 100, 100)).toThrow(
            Error
        );
    }
);

test("Health should be 100 by default", () => {
    const character = new Character("Luminar", "Magician");
    expect(character.health).toBe(100);
});

test("Level should be 1 by default", () => {
    const character = new Character("Luminar", "Magician");
    expect(character.level).toBe(1);
});