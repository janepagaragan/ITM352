var month = 'March';
var day = 12;
var year = 2000;

step1 = (month == 'January' || month == 'February')?(year - 1):year;
step2= step1 + parseInt(step1/4);
step3 = step2 - parseInt(step1/100);
step4 = step3 + parseInt(step1/400);
step5 = step4 + day;

monthKey = {
January:0,
February:3,
March:2,
April:5,
May:0,
June:3,
July:5,
August:1,
September:4,
October:6,
November:2,
December:4
};
step6 = monthKey[month] + step5;
step7 = step6%7;

console.log(step7);