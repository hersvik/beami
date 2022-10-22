const isAhead = require("./isAhead");

function beam(input){

    let accountSum = sumObjectValues(input.accounts)
    
    let payoutsAheadSum = input.payouts.reduce(
        (prev, curr) => isAhead(curr, input) 
                            ? prev + curr.amount 
                            : prev, 
        0
    );

    return {
        sumNow: accountSum,
        payoutsAheadSum: payoutsAheadSum,
        balanceWithPayouts: accountSum - payoutsAheadSum,
        payoutsAhead: input.payouts.filter(b => isAhead(b, input)),
        today: todayMessage(input),
    };
}

/* Utility */

function sumObjectValues(obj) {
    return Object.values(obj).reduce((prev, curr)=>prev + curr, 0); 
};

function todayMessage(input){
    const realToday = new Date();
    realToday.setUTCHours(0,0,0,0);
    if(realToday > input.today || realToday < input.today)
        return "ALERT !!! - " + input.today + " NOT really today !!!";
    else
        return "(ok is today) " + input.today;
}

module.exports = beam;