/**
 * Nhập vào 1 số n và in ra bảng cửu chương của n
 * ví dụ nhập vào số 2
 * output:
 * 2 x 1 = 2
 * 2 x 2 = 4
 * 2 x 3 = 6
 */
let n = parseInt (prompt("Nhập vào số bảng cửu chương "));
// c1
// for (let i = 1; i <=10; i++) {
//     factorial = n*i
//     document.write(n + "x" + i + "=" + factorial)    
// }


// c2
for (let i = 1; i <=10; i++) {
    document.write(`${n} x ${i} = ${n * i} <br>`);
}
