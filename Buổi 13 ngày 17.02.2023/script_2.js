/** Nhập vào 1 số nguyên dương n 
 * tính ra n!
 * Note: !n được tính bằng công thức sau
 * n! = n*(n-1)*(n-2)*....*1
 * VD: 5! = 5*4*3*2*1
 */
let n = parseInt(prompt("Please input n: "));
let factorial = 1;

for(let i = 1; i <= n; i ++) {
    factorial = factorial*i;
}
alert (factorial);
