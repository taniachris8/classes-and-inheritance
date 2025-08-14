import Bowerman from "../Bowerman";

let bowerman;

beforeEach(() => {
    bowerman = new Bowerman("Elandir");
});

test("Type should be 'Bowerman'", () => {
    expect(bowerman.type).toEqual("Bowerman");
});

test("Attack should be 25 by default", () => {
    expect(bowerman.attack).toBe(25);
});

test("Defence should be 25 by default", () => {
    expect(bowerman.defence).toBe(25);
});