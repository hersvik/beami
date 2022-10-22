
const input = {
    today: new Date("2022-10-18"),
    bigPayDay: 15,
    accounts: {
        visa: 6362,
        regningsKonto: 20812,
        lonnskonto: 5205,
        // asktransaksjon: 0,
        // ragnhild: 1887,
        // ingrid: 447,
        // reidunlonnskonto: 3285,
        // pgjengen: 0,
        // spareReidun: 0,
        // feriepengerkonto: 0,
        // bufferkonto: 0,
    },
    payouts: [
        {
            title: "KF",
            amount: 2013,
            monthly: 31,//"månedskiftet"
        },
        {
            title: "telia",
            amount: 767,
            monthly: 8,
        },
        {
            title: "Norgesenergi",
            amount: 2000,
            monthly: 27,
        },
        {
            title: "Gjensidige",
            amount: 1522,
            monthly: 25,
        },
        {
            title: "Gjensidige",
            amount: 1037,
            monthly: 25,
        },
        {
            title: "Gjensidige",
            amount: 501,
            monthly: 25,
        },
        {
            title: "Gjensidige",
            amount: 84,
            monthly: 25,
        },
        {
            title: "lanekassen",
            amount: 1858,
            monthly: 15,
        },
        {
            title: "lanekassen",
            amount: 1306,
            monthly: 15,
        },
        {
            title: "flyt",
            amount: 400,
            monthly: 16,
        },
        {
            title: "obos",
            amount: 4815,
            monthly: 16,
        },
        {
            title: "lån",
            amount: 11000,
            monthly: 16,
        },

        {
            title: "kredittkort",
            amount: 9285,
            due: new Date("2022-10-25"),
        },
    ]
}

const beam = require("./beam");

console.log(beam(input))
