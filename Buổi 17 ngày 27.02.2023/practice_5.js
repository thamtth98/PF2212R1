// Bài 5: Đếm xem trong array có tổng cộng bao nhiêu số 20
let array1 = [5, 10, 15, 20, 25, 50, 20];

let count = 0;

for(i in array1) {
    if(array1[i] == 20){
        count = count + 1;
    }

}
document.write(count);
