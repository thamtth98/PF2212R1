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
    console.log(total);
}
calculateSum();
calculateSum(); //chạy bao nhiều lần thì chạy function bấy nhiu lần
