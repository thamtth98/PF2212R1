/**
 * Viết hàm findPrimes() nhận vào tham số
 * nStart và nEnd và in ra tất cả số nguyên tố
 * trong khoảng [nStart, nEnd]
 */
function findPrimes(nStart, nEnd) {
  for (let i = nStart; i <= nEnd; i++) {
    if (isPrimeNumber(i)) //trả về giá trị true, thì k cần ghi ==true
     {
      document.write(i + " ");
    }
  }
}
findPrimes(2, 24);
