// let btnAction1 = document.getElementById("btn-action-1");
// btnAction1.addEventListener("click", () => {
  // let length = parseInt(document.getElementById("length").value);
  // let width = parseInt(document.getElementById("width").value);
  // if (length == width) {
  //   alert("Đây là hình vuông");
  // } else {
  //   alert("Đây là hình chữ nhật");
  // }
// });

// học bài 19 rồi quay lại làm cách khác:
function checkSideRectangle() {
  let length = parseInt(document.getElementById("length").value);
  let width = parseInt(document.getElementById("width").value);
  if (length == width) {
    alert("Đây là hình vuông");
  } else {
    alert("Đây là hình chữ nhật");
  }
  
}


// bài 2
let btnAction2 = document.getElementById("btn-action-2");
btnAction2.addEventListener("click", () => {
  let a = parseInt(document.getElementById("number-a").value);
  let b = parseInt(document.getElementById("number-b").value);
  if (a >= b) {
    alert(`Giá trị lớn nhất là ${a}`);
  } else {
    alert(`Giá trị lớn nhất là ${b}`);
  }
});

// bài 3
let btnAction3 = document.getElementById("btn-action-3");
btnAction3.addEventListener("click", () => {
  let n = parseInt(document.getElementById("n").value);
  if (n > 0) {
    alert(`Giá trị tuyệt đối của n là ${n}`);
  } else {
    alert(`Giá trị tuyệt đối của n là ${-n}`);
  }

  // toán tử 3 ngôi ~ Tenary Operator
  n >= 0
    ? alert(`Giá trị tuyệt đối của n là ${n}`)
    : alert(`Giá trị tuyệt đối của n là ${-n}`);
});

// bài 4
let btnAction4 = document.getElementById("btn-action-4");
btnAction4.addEventListener("click", () => {
  let day = parseInt(document.getElementById("day").value);
  // if ( day > 2 && day < 9) {
  //     if (day == 2) {
  //         alert ("Monday");
  //     }
  //     if (day == 3) {
  //         alert ("Tuesday");
  //     }
  //     if (day == 4) {
  //         alert ("Wednesday");
  //     }
  //     if (day == 5) {
  //         alert ("Thurday");
  //     }
  //     if (day == 6) {
  //         alert ("Friday");
  //     }
  //     if (day == 7) {
  //         alert ("Saturday");
  //     }
  //     if (day == 8) {
  //         alert ("Sunday");
  //     }
  // } else {
  //     alert ("Nhập ngày từ 2 đến 8")
  // }

  // })

  switch (day) {
    case 2:
      alert("Monday");
      break;
    case 3:
      alert("Tuesday");
      break;
    case 4:
      alert("Wednesday");
      break;
    case 5:
      alert("Thurday");
      break;
    case 6:
      alert("Friday");
      break;
    case 7:
      alert("Saturday");
      break;    
    default:
        alert("Sunday");
      break;
  }
});
// bài 5
let btnAction5 = document.getElementById("btn-action-5");
btnAction5.addEventListener("click", () => {
  let n1 = parseInt(document.getElementById("n1").value);
  let n2 = parseInt(document.getElementById("n2").value);
  let n3 = parseInt(document.getElementById("n3").value);
//   
let maxValue = n1;
if (maxValue < n2) maxValue = n2;
if (maxValue < n3) maxValue = n3;

alert (`Max value is ${maxValue}`);
});
