import Magician from "../Magician";

test("Testing if the object was created correctly", () => {
    const magician = new Magician("John");
    const resultObj = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "John",
        type: "Magician",
    };

    expect(magician).toEqual(resultObj);
});

describe("testing levelUp function", () => {
    let magician;

    beforeEach(() => {
        magician = new Magician("Harry");
        magician.levelUp();
    });

    test("levelUp func should increase level by 1 ", () => {
        expect(magician.level).toBe(2);
    });

    test("levelUp func should increase attack by 20%", () => {
        expect(magician.attack).toBe(12);
    });

    test("levelUp func should increase defence by 20%", () => {
        expect(magician.defence).toBe(48);
    });

    test("levelUp func should make health to be equal to 100", () => {
        expect(magician.health).toBe(100);
    });

    test("levelUp func should throw an error if health is equal to 0", () => {
        magician.health = 0;
        expect(() => magician.levelUp()).toThrow(Error);
    });
});

describe("testing damage function", () => {
    let magician;

    beforeEach(() => {
        magician = new Magician("Patric");
    });

    test("Should calculate health correctly", () => {
        magician.damage(10);
        expect(magician.health).toBeCloseTo(94);
    });

    test("Should change health to 0 if health is < 0", () => {
        magician.health = -1;
        magician.damage(1);
        expect(magician.health).toBe(0);
    });
});