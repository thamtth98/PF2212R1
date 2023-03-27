class HocVien {
    //Hàm tạo (constructor)
    constructor(sHoTen, sDienThoai, sEmail, dDiem, bGioiTinh) {
        this.HocVien = sHoTen;
        this.DienThoai = sDienThoai;
        this.Email = sEmail;
        this.Diem = dDiem;
        this.Gioitinh = bGioiTinh;
    }
}

//demo
let hv1 = new HocVien("Hoai", "0909909111", "hoai@gmail.com", "9.0", true);
console.log(hv1);
console.log("Email", hv1.Email);

// luwu thông tin danh sách lớp
let dsLop = [];
dsLop.push(hv1);
let hv2 = new HocVien("Tèo Trần","0988768091",);
console.log("Học viên 2", hv2);
dsLop.push(hv2);
console.log("danh sách lớp", dsLop);