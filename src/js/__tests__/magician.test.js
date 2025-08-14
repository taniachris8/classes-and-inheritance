import Magician from "../Magician";

let magician;

beforeEach(() => {
    magician = new Magician("Stefan");
});

test("Type should be 'Magician'", () => {
    expect(magician.type).toEqual("Magician");
});

test("Attack should be 10 by default", () => {
    expect(magician.attack).toBe(10);
});

test("Defence should be 40 by default", () => {
    expect(magician.defence).toBe(40);
});