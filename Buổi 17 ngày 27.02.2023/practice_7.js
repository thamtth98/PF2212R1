// Tạo ra 1 danh sách mới từ 2 danh sách ban đầu 
// theo thứ tự như sau:
let array1 = ["Hello ", "take "];
let array2 = ["Dear", "Sir"];
let result = [];

// Output ['Hello Dear', 'Hello Sir', 'take Dear', 'take Sir' ]
// let array3 = array1.reverse();
// casch minhf lafm:
//  for (i in array2) {
//     result.push(array1[0] + array2[i]); 
// }
// for (i in array2) {
//     result.push(array1[1] + array2[i]);
// }
// console.log(result);    

// Thay chua:
for(let i in array1){
    for(let j in array2){
        result.push(array1[i] + array2[j]);
    }
}
console.log(result);