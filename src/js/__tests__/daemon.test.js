import Daemon from "../Daemon";

let daemon;

beforeEach(() => {
    daemon = new Daemon("Stefan");
});

test("Type should be 'Daemon'", () => {
    expect(daemon.type).toEqual("Daemon");
});

test("Attack should be 10 by default", () => {
    expect(daemon.attack).toBe(10);
});

test("Defence should be 40 by default", () => {
    expect(daemon.defence).toBe(40);
});