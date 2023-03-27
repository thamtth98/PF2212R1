// find the canvas element
let canvas = document.getElementById("myCanvas");
// create a drawing object
let ctx = canvas.getContext("2d");

// //drawing on the canvas
// ctx.fillStyle = "#FF0000";
// ctx.fillRect(75, 50, 150, 100);

// ctx.fillStyle = "#00FF00";
// ctx.fillRect(0, 0, 150, 100);


//Canvas - Gradients
//1. Using createLinearGradient(x,y,x1,y1); x,y: điểm bắt đầu; x1,y1: điểm kết thúc
// let linearGra = ctx.createLinearGradient(0, 0, 200, 0 )
// linearGra.addColorStop(0, "red");
// linearGra.addColorStop(1, "white");

// //Fill with gradient
// ctx.fillStyle = linearGra;
// ctx.fillRect(0, 0, 150, 80)

//2. Using createRadialGradient(x,y,r,x1,y1,r1):
// //x0
// Tọa độ trục x của vòng tròn bắt đầu.

// y0
// Tọa độ trục y của vòng tròn bắt đầu.

// r0
// Bán kính của vòng tròn bắt đầu. Phải không âm và hữu hạn.

// x1
// Tọa độ trục x của đường tròn kết thúc.

// y1
// Tọa độ trục y của đường tròn kết thúc.

// r1
// Bán kính của đường tròn kết thúc. Phải không âm và hữu hạn.
let radialGra = ctx.createRadialGradient(75, 50, 5, 90, 60, 100);
radialGra.addColorStop(0, "blue");
radialGra.addColorStop(1, "white");

//Fill with gradient
ctx.fillStyle = radialGra;
ctx.fillRect(10, 10, 150, 80);