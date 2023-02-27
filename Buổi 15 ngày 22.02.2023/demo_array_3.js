// các thuộc tính và phương thức của mảng
let nameList = ["Anthony", "Bella", "Chris"];
document.write(`Manrg ban đầu: ${nameList}<br>`);

// Độ dài của mảng
document.write(`Độ dài của mảng là ${nameList.length}<br>`);

//Thêm vào phần tử vào mảng
nameList.push("David");
document.write(`Manrg sau khi thêm David: ${nameList}<br>`);
document.write(`Độ dài của mảng là ${nameList.length}<br>`);


//
nameList[nameList.length] = "Emily";
//length hơn index 1 đơn vị,
//viết như này đang set cho phần tử ở length 1 giá trị
//tương đương với nameList[3]
document.write(`Độ dài của mảng là ${nameList.length}<br>`);


// Xóa phần tử ra khỏi mảng
//cách 1 - shift: xóa phần tử đầu mảng
let removedItem = nameList.shift(); //xóa phần tử đầu tiên của mảng
document.write(`Phaafn tử đã bị xóa: ${removedItem} <br>`)
document.write(`Manrg sau khi shift(): ${nameList}<br>`);
document.write(`Độ dài của mảng là ${nameList.length}<br>`);

removedItem = nameList.shift(); //xóa phần tử đầu tiên của mảng
document.write(`Phaafn tử đã bị xóa: ${removedItem} <br>`)
document.write(`Manrg sau khi shift(): ${nameList}<br>`);
document.write(`Độ dài của mảng là ${nameList.length}<br>`);


// Cách 2 - pop: xóa phần tử cuối mảng
removedItem = nameList.pop(); //xóa phần tử đầu tiên của mảng
document.write(`Phaafn tử đã bị xóa: ${removedItem} <br>`)
document.write(`Manrg sau khi pop(): ${nameList}<br>`);
document.write(`Độ dài của mảng là ${nameList.length}<br>`);

removedItem = nameList.shift(); //xóa phần tử đầu tiên của mảng
document.write(`Phaafn tử đã bị xóa: ${removedItem} <br>`)
document.write(`Manrg sau khi shift(): ${nameList}<br>`);
document.write(`Độ dài của mảng là ${nameList.length}<br>`);
