//Viết chương trình nhập vào n, kiểm tra n có phải là số nguyên tố k?
/**
 * Note: số nguyên tố là số chỉ chia hết cho 1 và chính nó.
 *
 */
let n = parseInt(prompt("Please input n: "));
let i = 2;
let totalDivisor = 0;

while (i < n) {
  if (n % i == 0) {
    totalDivisor += 1;
    break;
  }
  i++;
}

if (totalDivisor == 0) {
  document.write(`${n} là số nguyên tố`);
} else {
    document.write(`${n} không phải là số nguyên tố`);
}
