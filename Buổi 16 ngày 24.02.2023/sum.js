// tính tổng, dùng với biến mảng số
// gán 1 biến sum = 0
// duyệt từ đầu mảng, cộng dồn cacs phần tử vào biến sum
// sau duyệt thì in ra sum

let arr = [2, 3, 4, 5, 6];

let sum = 0;
for(let i=0; i<arr.length; i++){
    sum += arr[i];
}
console.log(sum);
console.log(arr.length);

