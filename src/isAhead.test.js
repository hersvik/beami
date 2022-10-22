const todayIs17_payday15 = {
    today: new Date("2022-10-17"),
    bigPayDay: 15,
}

const isAhead = require("./isAhead"); // sut

test('Bill is on payday, thus belongs to next salary period', () => {
    expect(isAhead({monthly: 15}, todayIs17_payday15)).toBe(false);
})
test('Bill is day before payday thus ahead and in this period', () => {
    expect(isAhead({monthly: 14}, todayIs17_payday15)).toBe(true);
})
test('Bill is day after today', () => {
    expect(isAhead({monthly: 18}, todayIs17_payday15)).toBe(true);
})
test('Bill is today', () => {
    expect(isAhead({monthly: 17}, todayIs17_payday15)).toBe(false);// Q: in real life, is bill today usually prossesed early in the day and not ahead during same day?
})

const todayIs13_payday15 = {
    today: new Date("2022-10-13"), // changed.
    bigPayDay: 15,
}

test('Bill is on payday, thus belongs to next salary period', () => {
    expect(isAhead({monthly: 15}, todayIs13_payday15)).toBe(false);
})
test('Bill is day before payday thus ahead and in this period', () => {
    expect(isAhead({monthly: 14}, todayIs13_payday15)).toBe(true);
})
test('Bill is today', () => {
    expect(isAhead({monthly: 13}, todayIs13_payday15)).toBe(false);// Q: in real life, same note as above.
})

const todayIs13_payday10 = {
    today: new Date("2022-10-13"),
    bigPayDay: 10, // changed.
}

test('Bill is on payday', () => {
    expect(isAhead({monthly: 10}, todayIs13_payday10)).toBe(false);
})
test('Bill is day before payday', () => {
    expect(isAhead({monthly: 9}, todayIs13_payday10)).toBe(true);
})
