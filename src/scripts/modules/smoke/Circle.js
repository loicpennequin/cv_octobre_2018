export default class Circle {
    constructor(p5, x, y, size) {
        this.p5 = p5;
        this.target = this.p5.createVector(x, y);
        this.size = size;
        this.pos = this.p5.createVector(
            0 - this.size / 3,
            this.p5.height + this.size / 3
        );
        this.opacity = this.p5.random(70, 100);
        this.stepsCount = 250;
        this.moveStep = this.p5
            .createVector(this.target.x, this.target.y)
            .sub(this.pos)
            .div(this.stepsCount);
        this.sizeStep = this.size / this.stepsCount;
        this.opacityStep = this.opacity / (this.stepsCount * 2);
    }

    shrink() {
        if (this.size >= 0) {
            this.size -= this.sizeStep;
        }
        this.opacity -= this.opacityStep;
    }

    move() {
        this.pos = this.pos.add(this.moveStep);
    }

    render() {
        this.shrink();
        this.move();
        this.p5.fill(255, 255, 255, this.opacity);
        this.p5.ellipse(this.pos.x, this.pos.y, this.size);
    }
}
