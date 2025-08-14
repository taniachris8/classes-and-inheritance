import Swordsman from "../Swordsman";

let swordsman;

beforeEach(() => {
    swordsman = new Swordsman("Alexandre");
});

test("Type should be 'Swordsman'", () => {
    expect(swordsman.type).toEqual("Swordsman");
});

test("Attack should be 40 by default", () => {
    expect(swordsman.attack).toBe(40);
});

test("Defence should be 10 by default", () => {
    expect(swordsman.defence).toBe(10);
});