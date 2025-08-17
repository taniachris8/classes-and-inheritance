import Daemon from "../Daemon";

test("Testing if the object was created correctly", () => {
    const daemon = new Daemon("Stefan");
    const resultObj = {
        attack: 10,
        defence: 40,
        health: 100,
        level: 1,
        name: "Stefan",
        type: "Daemon",
    };

    expect(daemon).toEqual(resultObj);
});

describe("testing levelUp function", () => {
    let daemon;

    beforeEach(() => {
        daemon = new Daemon("Yann");
        daemon.levelUp();
    });

    test("levelUp func should increase level by 1 ", () => {
        expect(daemon.level).toBe(2);
    });

    test("levelUp func should increase attack by 20%", () => {
        expect(daemon.attack).toBe(12);
    });

    test("levelUp func should increase defence by 20%", () => {
        expect(daemon.defence).toBe(48);
    });

    test("levelUp func should make health to be equal to 100", () => {
        expect(daemon.health).toBe(100);
    });

    test("levelUp func should throw an error if health is equal to 0", () => {
        daemon.health = 0;
        expect(() => daemon.levelUp()).toThrow(Error);
    });
});

describe("testing damage function", () => {
    let daemon;

    beforeEach(() => {
        daemon = new Daemon("Carol");
    });

    test("Should calculate health correctly", () => {
        daemon.damage(10);
        expect(daemon.health).toBeCloseTo(94);
    });

    test("Should change health to 0 if health is < 0", () => {
        daemon.health = -1;
        daemon.damage(1);
        expect(daemon.health).toBe(0);
    });
});