
function isAhead(payout, input){

    if (!payout.due && isNaN(payout.monthly))
        throw "payout without due date or monthly value";

    if (payout.due > input.today)
        return true;

    if (isNaN(payout.monthly))
        return false;

    let payoutIsAfterPayDay = payout.monthly >= input.bigPayDay;
    let todayIsAfterPayDay = input.today.getDate() > input.bigPayDay;
    if (todayIsAfterPayDay && !payoutIsAfterPayDay)
        return true;
    else if (!todayIsAfterPayDay && payoutIsAfterPayDay)
        return false;
    else if (payout.monthly > input.today.getDate())
        return true;
    else 
        return false;
}

module.exports = isAhead;