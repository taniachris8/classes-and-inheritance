import Undead from "../Undead";

let undead;

beforeEach(() => {
    undead = new Undead("Victor");
});

test("Type should be 'Undead'", () => {
    expect(undead.type).toEqual("Undead");
});

test("Attack should be 25 by default", () => {
    expect(undead.attack).toBe(25);
});

test("Defence should be 25 by default", () => {
    expect(undead.defence).toBe(25);
});