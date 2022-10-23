const daysLeft = require("./daysLeft");
const isAhead = require("./isAhead");

function beam(input){

    let accountSum = sumObjectValues(input.accounts)
    
    let payoutsAheadSum = input.payouts.reduce(
        (prev, curr) => isAhead(curr, input) 
                            ? prev + curr.amount 
                            : prev, 
        0
    );

    const balanceWithPayouts = accountSum - payoutsAheadSum
    
    const compareChronological = (a, b) => {
        let dayA = a.due && a.due.getDate() || a.monthly;
        let dayB = b.due && b.due.getDate() || b.monthly;
        dayA += (input.today.getDate() > dayA) && 31;
        dayB += (input.today.getDate() > dayB) && 31;
        return dayA - dayB;
    }
    
    return {
        payoutsAhead: input.payouts.filter(b => isAhead(b, input)).sort(compareChronological),

        sumNow: accountSum,
        payoutsAheadSum: payoutsAheadSum,
        balanceWithPayouts: balanceWithPayouts,

        today: todayMessage(input),
        daysUntilBigPayDay: daysLeft(input.bigPayDay, input.today),
        remainingPerDay: (balanceWithPayouts/daysLeft(input.bigPayDay, input.today)).toFixed(0),
        extrapolatedResult: balanceWithPayouts - input.dailyBudget * daysLeft(input.bigPayDay, input.today) + " kr",
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
        return "(ok it's today) " + input.today;
}

module.exports = beam;