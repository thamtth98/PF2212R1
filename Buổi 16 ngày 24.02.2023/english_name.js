let TV = ["chó", "mèo", "cá"];
let TA = ["dog","cat","fish"];

let n = prompt("Nhập vào từ TV");

for(let i = 0; i<TV.length; i++) {
    if(n == TV[i]) {
        console.log(TA[i]);
    } else {console.log("Không có")};
}

