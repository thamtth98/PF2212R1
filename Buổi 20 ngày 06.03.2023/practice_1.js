/**
 * Viết hàm isLeapYear() nhận vào 1 tham số year 
 * và kiểm tra xem year có phải năm nhuận hay không
 * 
 */
function isLeapYear(n) {
    if (n % 4 == 0 & n % 100 != 0){
        console.log("True");
    } else if(n % 100 == 0 & n % 400 ==0){
        console.log("True");

    } else {
        console.log("False");
    }

}
isLeapYear(2000);
isLeapYear(2005);
