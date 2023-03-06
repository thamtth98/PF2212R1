/**
 * Bài 1:
    Viết hàm sumEven() nhận vào một số `n` 
    và in ra tổng các số chẵn từ 2 đến n.
    Ví dụ:
    sumEven(10)

    Output:
    30
 */
// let n = parseInt(prompt("Please input n: "));

// mình làm nhưng chưa biết sai ở đâu   
// function sumEven(n) {
//     let sum = 0;
//     for (let i = 0; i <= n; i++) {
//     if(i % 2 == 0) {
//         sum = sum + i;
//         console.log(sum);
//     }
// } //console.log(sum);
// }

// sumEven(10);

// thầy giải:
function sumEven(n) {
    let sum = 0;
    for (let i = 2; i <= n; i += 2) {
        sum += i;
    }
    console.log(sum);
}

sumEven(10);