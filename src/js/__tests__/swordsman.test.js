import Swordsman from "../Swordsman";

test("Testing if the object was created correctly", () => {
    const swordsman = new Swordsman("Alexandre");
    const resultObj = {
        attack: 40,
        defence: 10,
        health: 100,
        level: 1,
        name: "Alexandre",
        type: "Swordsman",
    };

    expect(swordsman).toEqual(resultObj);
});


describe("testing levelUp function", () => {
    let swordsman;

    beforeEach(() => {
        swordsman = new Swordsman("Mary");
        swordsman.levelUp();
    });

    test("levelUp func should increase level by 1 ", () => {
        expect(swordsman.level).toBe(2);
    });

    test("levelUp func should increase attack by 20%", () => {
        expect(swordsman.attack).toBe(48);
    });

    test("levelUp func should increase defence by 20%", () => {
        expect(swordsman.defence).toBe(12);
    });

    test("levelUp func should make health to be equal to 100", () => {
        expect(swordsman.health).toBe(100);
    });

    test("levelUp func should throw an error if health is equal to 0", () => {
        swordsman.health = 0;
        expect(() => swordsman.levelUp()).toThrow(Error);
    });
});

describe("testing damage function", () => {
    let swordsman;

    beforeEach(() => {
        swordsman = new Swordsman("William");
    });

    test("Should calculate health correctly", () => {
        swordsman.damage(10);
        expect(swordsman.health).toBeCloseTo(91);
    });

    test("Should change health to 0 if health is < 0", () => {
        swordsman.health = -1;
        swordsman.damage(1);
        expect(swordsman.health).toBe(0);
    });
});