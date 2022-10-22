
function isAhead(bill, input){

    if (!bill.due && isNaN(bill.monthly))
        throw "Bill without due date or monthly value";

    if (bill.due > input.today)
        return true;

    if (isNaN(bill.monthly))
        return false;

    let billIsAfterPayDay = bill.monthly >= input.bigPayDay;
    let todayIsAfterPayDay = input.today.getDate() > input.bigPayDay;
    if (todayIsAfterPayDay && !billIsAfterPayDay)
        return true;
    else if (!todayIsAfterPayDay && billIsAfterPayDay)
        return false;
    else if (bill.monthly > input.today.getDate())
        return true;
    else 
        return false;
}

module.exports = isAhead;