const daysLeft = require("./daysLeft");

test('1 left', () => {
    const today = new Date("2022-10-14");
    expect(daysLeft(15, today)).toBe(1);
})
test('2 left', () => {
    const today = new Date("2022-10-14");
    expect(daysLeft(16, today)).toBe(2);
})

test('0 left = next full month from october', () => {
    const today = new Date("2022-10-15");
    expect(daysLeft(15, today)).toBe(31);
})
test('next month from 22. november', () => {
    const today = new Date("2022-11-22");
    expect(daysLeft(15, today)).toBe(23);
})