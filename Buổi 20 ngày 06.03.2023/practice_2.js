/**
 * Viết hàng isPrimeNumber() nhận vào 1 tham số number
 * và cho biết number có phải là số nguyên tố không
 */

function isPrimeNumber(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(2));
