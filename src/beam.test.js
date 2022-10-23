const input = {
    today: new Date("2022-10-17"),
    dailyBudget: 10,
    bigPayDay: 25,
    accounts: {
        visa: 111,
        regningsKonto: 222,
    },
    payouts: [
        {
            title: "Single bill",
            amount: 5,
            due: new Date("2022-10-22"),
        },
        {
            title: "Telia",
            amount: 700,
            monthly: 16,
        },
        {
            title: "zero amount",
            amount: 0,
            monthly: 19,
        },
        {
            title: "Gjensidige",
            amount: 300,
            monthly: 24,
        },
        {
            title: "Sort test, zero amount",
            amount: 0,
            due: new Date("2022-10-23"),
        },
        {
            title: "Sort test, zero amount",
            amount: 0,
            due: new Date("2022-11-15"),
        },
        {
            title: "Sort test, zero amount",
            amount: 0,
            monthly: 18,
        },
    ]
}

const beam = require("./beam");

test('Accounts sum minus bills before coming pay day should be correct', () => {
    expect(beam(input).balanceWithPayouts).toBe(111+222 - 300 - 5);
}) 

test('Bills ahead before pay day should be listed', () => {
    expect(beam(input).payoutsAhead).toEqual([
        {
            title: "Sort test, zero amount",
            amount: 0,
            monthly: 18,
        },
        {
            title: "zero amount",
            amount: 0,
            monthly: 19,
        },
        {
            title: "Single bill",
            amount: 5,
            due: new Date("2022-10-22"),
        },
        {
            title: "Sort test, zero amount",
            amount: 0,
            due: new Date("2022-10-23"),
        },
        {
            title: "Gjensidige",
            amount: 300,
            monthly: 24,
        },
        {
            title: "Sort test, zero amount",
            amount: 0,
            due: new Date("2022-11-15"),
        },
    ]);
})

test('Remaining per day (indirectly tests daysLeft)', () => {
    expect(beam(input).remainingPerDay).toBe("4");
})

test('ExtrapolatedResult', () => {
    expect(beam(input).extrapolatedResult).toBe("-52 kr")
})
