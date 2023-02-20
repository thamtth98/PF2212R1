/**
 * Nhập vào số hạng đầu tiên và công sai của cấp số cộng.
 * In ra 10 số hạng đầu tiên của cấp số cộng đó.
 *Ví dụ: số hạng đầu tiên là 3, công sai là 5
 *Output: 3 8 13 18 23 28 33 38 43 48
 */
 let n = parseInt(prompt("Nhập vào số hạng đầu tiên"));
 let d = parseInt(prompt("Nhập vào công sai"));
 document.write(n + " "); //số hạng đầu tiên của csc

 for (let i = n; i < 9; i++) {
    n = n + d;
    document.write (n + " ");
 }
