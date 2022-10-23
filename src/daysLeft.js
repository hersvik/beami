function daysLeft(bigPayDay, today) {
    if (bigPayDay - today.getDate() > 0)
        return bigPayDay - today.getDate();

    const payDayNextCalendarMonth = new Date(today.getUTCFullYear(), today.getUTCMonth() +1, bigPayDay);
    const millisDiff = payDayNextCalendarMonth.getTime() - today.getTime();
    return Math.ceil(millisDiff / (1000 * 3600 * 24));
}

module.exports = daysLeft;