/**
 * tìm max
 * gán max=a[0]
 * duyệt từ đầu mảng đến cuối mảng,
 * phần tử nào lớn hơn max thì gán bằng max
 * 
 */
let max = arr[0]
for(let i = 1; i<=arr.length; i++){
    if (arr[i]>max)
    mxx = arr[i];
}