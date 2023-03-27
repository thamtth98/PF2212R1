/**
 * mô tả 1 lớp PhanSo, lớp này gồm có 2 thuộc tính: tuSo, mauSo
 * Hai thuộc tính này được khởi tạo trong constructor.
 *
 */
// đối với tên class thì phải là danh từ, theo quy tắc upper camel case
class PhanSo {
  constructor(tuSo, mauSo) {
    this.tuSo = tuSo;
    this.mauSo = mauSo;
  }
  add(other) {
    //other là 1 đối tượng PhanSO khác
    //phanso 1: this
    //phanso 2: other
    let tuSoCong = this.tuSo * other.mauSo + other.tuSo * this.mauSo;
    let mauSoCong = this.mauSo * other.mauSo;
    console.log(`Kết quả của phép cộng: ${tuSoCong} / ${mauSoCong} `);
  }
  subtract(other) {
    let tuSoTru = this.tuSo * other.mauSo - other.tuSo * this.mauSo;
    let mauSoTru = this.mauSo * other.mauSo;
    console.log(`Kết quả của phép trừ: ${tuSoTru} / ${mauSoTru} `);
  }

  multiply(other) {
    let tuSoNhan = this.tuSo * other.tuSo;
    let mauSoNhan = this.mauSo * other.mauSo;
    console.log(`Kết quả của phép nhân: ${tuSoNhan} / ${mauSoNhan} `);
  }
  divide(other) {
    let tuSoChia = this.tuSo * other.mauSo;
    let mauSoChia = this.mauSo * other.tuSo;
    console.log(`Kết quả của phép chia: ${tuSoChia} / ${mauSoChia} `);
  }
}

//taoj ra object từ class PhanSo đã mô tả
let ps1 = new PhanSo(3, 5);
// console.log(ps1.tuSo);
let ps2 = new PhanSo(4, 5);
ps1.add(ps2);
ps1.subtract(ps2);
ps1.multiply(ps2);
ps1.divide(ps2);
