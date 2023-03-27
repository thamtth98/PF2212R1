/**
 * Viết hàm isLeapYear() nhận vào 1 tham số year 
 * và kiểm tra xem year có phải năm nhuận hay không
 * 
 */
//mình làm
// function isLeapYear(year) {
//     if (year % 4 == 0 & year % 100 != 0){
//         console.log("True");
//     } else if(year % 100 == 0 & year % 400 ==0){
//         console.log("True");

//     } else {
//         console.log("False");
//     }

// }

//thầy chữa:
function isLeapYear(year) {
     return (year % 4 == 0 & year % 100 != 0) || year % 400 == 0;
}
console.log(isLeapYear(2104));
console.log(isLeapYear(2005));
