import Undead from "../Undead";

test("Testing if the object was created correctly", () => {
    const undead = new Undead("Victor");
    const resultObj = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Victor",
        type: "Undead",
    };

    expect(undead).toEqual(resultObj);
});

describe("testing levelUp function", () => {
    let undead;

    beforeEach(() => {
        undead = new Undead("Garry");
        undead.levelUp();
    });

    test("levelUp func should increase level by 1 ", () => {
        expect(undead.level).toBe(2);
    });

    test("levelUp func should increase attack by 20%", () => {
        expect(undead.attack).toBe(30);
    });

    test("levelUp func should increase defence by 20%", () => {
        expect(undead.defence).toBe(30);
    });

    test("levelUp func should make health to be equal to 100", () => {
        expect(undead.health).toBe(100);
    });

    test("levelUp func should throw an error if health is equal to 0", () => {
        undead.health = 0;
        expect(() => undead.levelUp()).toThrow(Error);
    });
});

describe("testing damage function", () => {
    let undead;

    beforeEach(() => {
        undead = new Undead("Bob");
    });

    test("Should calculate health correctly", () => {
        undead.damage(10);
        expect(undead.health).toBeCloseTo(92.5);
    });

    test("Should change health to 0 if health is < 0", () => {
        undead.health = -1;
        undead.damage(1);
        expect(undead.health).toBe(0);
    });
});