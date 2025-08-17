import Bowerman from "../Bowerman";

test("Testing if the object was created correctly", () => {
    const bowerman = new Bowerman("Elandir");
    const resultObj = {
        attack: 25,
        defence: 25,
        health: 100,
        level: 1,
        name: "Elandir",
        type: "Bowerman"
    };

    expect(bowerman).toEqual(resultObj);
});

describe("testing levelUp function", () => {
    let bowerman;

    beforeEach(() => {
        bowerman = new Bowerman("Harry");
        bowerman.levelUp();
    });

    test("levelUp func should increase level by 1 ", () => {
        expect(bowerman.level).toBe(2);
    });

    test("levelUp func should increase attack by 20%", () => {
        expect(bowerman.attack).toBe(30);
    });

    test("levelUp func should increase defence by 20%", () => {
        expect(bowerman.defence).toBe(30);
    });

    test("levelUp func should make health to be equal to 100", () => {
        expect(bowerman.health).toBe(100);
    });

    test("levelUp func should throw an error if health is equal to 0", () => {
        bowerman.health = 0;
        expect(() => bowerman.levelUp()).toThrow(Error);
    });
});

describe("testing damage function", () => {
    let bowerman;

    beforeEach(() => {
        bowerman = new Bowerman("Larry");
    });

    test("Should calculate health correctly", () => {
        bowerman.damage(10);
        expect(bowerman.health).toBeCloseTo(92.5);
    });

    test("Should change health to 0 if health is < 0", () => {
        bowerman.health = -1;
        bowerman.damage(1);
        expect(bowerman.health).toBe(0);
    });
});