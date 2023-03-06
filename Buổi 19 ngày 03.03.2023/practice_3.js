// Viết hàm solveEquation()
// để giải phương trình bậc nhất ax + b = 0
// với a và b là 2 tham số đầu vào.
// let a = parseInt(prompt("Nhap a"));
//     let b = parseInt(prompt("Nhap b"));
// Mình làm:
// function solveEquation(a, b) {
//   if ((a == 0) & (b == 0)) {
//     console.log("Phương trình vô số nghiệm");
//   } else if (a != 0) {
//     x = -b / a;
//     console.log(`Nghiệm của phương trình là x = ${x}`);
//   } else if ((a == 0) & (b != 0)) {
//     console.log(`Phương trình vô nghiệm`);
//   }
// }

// thầy chưã:
function solveEquation(a, b) {
  if (a != 0) {
    console.log(`Nghiệm của phương trình là x = ${-b}/${a}`);
  } else {
    //a=0
    if (b == 0) {
      console.log("Phương trình vô số nghiệm");
    } else {
      console.log(`Phương trình vô nghiệm`);
    }
  }
}
solveEquation(2, -8);
solveEquation(0, 0);
solveEquation(0, 7);
