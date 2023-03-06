// Nhập vào 2 số a, b. Tính tổng của 2 số vừa nhập
// Cách 1: 2 đoạn rời rạc
// let a = parseInt(prompt("Please input a: "));
// let b = parseInt(prompt("Please input b: "));

// let sumAB = a+b;
// console.log(sumAB);
// // nhập vào 2 số c, d. TÍnh tổng 2 số vừa nhập
// let c = parseInt(prompt("Please input a: "));
// let d = parseInt(prompt("Please input b: "));

// let sumCD = c+d;
// console.log(sumCD);

// Cách dùng hàm
function calculateSum() {
    let n1 = parseInt(prompt("Please input n1: "));
    let n2 = parseInt(prompt("Please input n2: "));

    let total = n1 +n2;
    // console.log(total);

    // sau khi tính toán xong, trả kết quả ra bên ngoài 
    // thay vì in trực tiếp
    return total; //trả kqua mà hàm đã xử lý ra bên ngoài
    // thường với hàm parseInt, promt,... 
    // thực hiện return là đóng kqua trả ra bên ngoài,
    // nên những dòng code dưới câu lệnh return sẽ k đc chạy
    
}

let result = calculateSum();
console.log(result);
// calculateSum();
// calculateSum(); //chạy bao nhiều lần thì chạy function bấy nhiu lần
