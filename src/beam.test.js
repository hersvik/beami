const input = {
    today: new Date("2022-10-17"),
    bigPayDay: 25,
    accounts: {
        visa: 111,
        regningsKonto: 222,
    },
    bills: [
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
            title: "Gjensidige",
            amount: 300,
            monthly: 24,
        },
        // {
        //     title: "Dummy no date",
        //     amount: 999,
        // },
    ]
}

const beam = require("./beam");

test('Accounts sum minus bills before coming pay day should be correct', () => {
    expect(beam(input).sumMinusBills).toBe(111+222 - 300 - 5);
}) 

test('Bills ahead before pay day should be listed', () => {
    expect(beam(input).billsAhead).toEqual([
        {
            title: "Single bill",
            amount: 5,
            due: new Date("2022-10-22"),
        },
        {
            title: "Gjensidige",
            amount: 300,
            monthly: 24,
        },
    ]);
})
