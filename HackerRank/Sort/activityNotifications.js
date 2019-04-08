// If the amount spent by a client on a particular day is greater than or equal to  the client's median spending for a trailing number of days, they send the client a notification about potential fraud. The bank doesn't send the client any notifications until they have at least that trailing number of prior days' transaction data.
//
// Given the number of trailing days  and a client's total daily expenditures for a period of days, find and print the number of times the client will receive a notification over all  days.
//
// For example,  and . On the first three days, they just collect spending data. At day , we have trailing expenditures of . The median is  and the day's expenditure is . Because , there will be a notice. The next day, our trailing expenditures are  and the expenditures are . This is less than  so no notice will be sent. Over the period, there was one notice sent.
//
// Complete the function activityNotifications in the editor below. It must return an integer representing the number of client notifications.
//Input
// activityNotifications has the following parameter(s):
//     expenditure: an array of integers representing daily expenditures
//     d: an integer, the lookback days for median spending


// get the average for d trailing days.
// compare the next element to this average, increment alertCounter if element > median
function activityNotifications(expenditure, d) {
    // start loop at this element
    // we still need the median for the initial lookback
    let startingElement = d
    let alertCount = 0
    for(startingElement; startingElement < expenditure.length; startingElement++){
        let startingMedian = startingElement - d
        let median = 0
        let count = 0
        while(count < d){
            median += expenditure[startingMedian]
            count++
            startingMedian++
        }
        median /= d
        if(expenditure[startingElement] >= median * 2){
            alertCount += 1
        }
    }
    return (alertCount)
}


activityNotifications([10,20,30,40,50],3)
