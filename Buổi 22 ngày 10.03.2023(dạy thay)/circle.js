class Circle {
    constructor(radius, color, x, y) {
        this.radius = radius;
        this.color = color;
        this.centerX = x;
        this.centerY = y;
    }
    getRadius() {
        return this.radius;
    }
    getArea() {
        return Math.PI * Math.pow(this.radius, 2);
    }

    draw(mycontext) {
        mycontext.beginPath();
        mycontext.arc(this.centerX, this.centerY, canvas.radius, 0, 2 * Math.PI);
        mycontext.strokeStyle = this.color;
        mycontext.stroke();
    }
}
