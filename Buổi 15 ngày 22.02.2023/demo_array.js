// Khai báo mảng
let nameList = ["Long", "Hiền", "Phúc"];  //danh sách tên
document.write(nameList + "<br>");
let numberList = [1, 2, 3, 4, 5]; //danh sách số tự nhiên
let info = ["Long", "longlamduc@gmail.com", true, 5.0]; // thông itn
let weekday = new Array("Sunday", "Monday");


console.log(weekday);
console.log(info);
console.log(numberList);

// kiểm tra kiểu dữ liêu của mảng
document.write(typeof(nameList) + "<br>");

//truy vấn 1 phần tử trong mảng
let numbers = [1, 2, 3, 4, 5];

//in ra giá trị 4 trong mảng (index=3)
document.write(`Marng ban đầu: ${numbers} <br>`);
document.write(`Phần tử tại vị trí trong mảng có giá trị là: ${numbers[3]} <br>`)

//thay đổi giá trị tại index 3
numbers[3] = 10;
document.write(`Phần tử tại vị trí trong mảng có giá trị là: ${numbers[3]} <br>`)
document.write(`Mảng sau khi thay đổi giá trị: ${numbers} <br>`);
