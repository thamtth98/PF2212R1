//Các thuộc tính và phương thức của mảng - join, reverse, sort 
let nameList = ["Anthony", "Bella", "Chris", "Luis", "Jake", "Zenny"];

//đảo ngược mảng
document.write(`Manrg trước khi reverse: ${nameList} <br>`);
nameList.reverse(); //đảo ngược thứ tự ban đầu của mảng
document.write(`Manrg sau khi reverse: ${nameList}<br>`);

//sắp xếp lại các phần tử trong mảng
document.write (`Manrg trước khi sort: ${nameList}<br>`);
nameList.sort(); //sắp xếp lại thứ tự các phần tử trong mảng, đối với các phần tử cơ bản
document.write(`Manrg sau khi sort: ${nameList} <br>`);

//nối các phần tử trong mảng lại thành chuỗi
console.log(nameList);
console.log(nameList.join("---")); //type: array # trên là object
