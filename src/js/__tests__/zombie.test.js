import Zombie from "../Zombie";

test("Testing if the object was created correctly", () => {
    const zombie = new Zombie("Walker");
    const resultObj = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Walker",
        type: "Zombie",
    };

    expect(zombie).toEqual(resultObj);
});

describe("testing levelUp function", () => {
    let zombie;

    beforeEach(() => {
        zombie = new Zombie("Black");
        zombie.levelUp();
    });

    test("levelUp func should increase level by 1 ", () => {
        expect(zombie.level).toBe(2);
    });

    test("levelUp func should increase attack by 20%", () => {
        expect(zombie.attack).toBe(48);
    });

    test("levelUp func should increase defence by 20%", () => {
        expect(zombie.defence).toBe(12);
    });

    test("levelUp func should make health to be equal to 100", () => {
        expect(zombie.health).toBe(100);
    });

    test("levelUp func should throw an error if health is equal to 0", () => {
        zombie.health = 0;
        expect(() => zombie.levelUp()).toThrow(Error);
    });
});

describe("testing damage function", () => {
    let zombie;

    beforeEach(() => {
        zombie = new Zombie("Bee");
    });

    test("Should calculate health correctly", () => {
        zombie.damage(10);
        expect(zombie.health).toBeCloseTo(91);
    });

    test("Should change health to 0 if health is < 0", () => {
        zombie.health = -1;
        zombie.damage(1);
        expect(zombie.health).toBe(0);
    });
});