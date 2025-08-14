import Zombie from "../Zombie";

let zombie;

beforeEach(() => {
    zombie = new Zombie("Walker");
});

test("Type should be 'Zombie'", () => {
    expect(zombie.type).toEqual("Zombie");
});

test("Attack should be 40 by default", () => {
    expect(zombie.attack).toBe(40);
});

test("Defence should be 10 by default", () => {
    expect(zombie.defence).toBe(10);
});