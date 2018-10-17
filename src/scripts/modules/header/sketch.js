import p5 from 'p5';

class Sketch {
    constructor() {
        this.wrapper = document.getElementById('header-sketch');
        this.canvasHeight = this.wrapper.offsetHeight;
        this.canvasWidth = window.innerWidth;
        this.circlesCount = 50;
        this.circleMinSize = 200;
        this.circleMaxSize = 400;
        this.circles = [];
    }

    sketch(p5) {
        p5.setup = () => this.setup(p5);
        p5.draw = () => this.draw(p5);
    }

    setup(p5) {
        const { canvasHeight, canvasWidth, wrapper } = this;

        p5.createCanvas(this.canvasWidth, this.canvasHeight).parent(
            this.wrapper
        );
        p5.noStroke();
        // p5.frameRate(1);
        for (let i = 0; i < this.circlesCount; i++) {
            this.circles.push(
                new Circle(
                    p5,
                    p5.random(p5.width),
                    p5.random(p5.height),
                    p5.random(this.circleMinSize, this.circleMaxSize)
                )
            );
        }
    }

    draw(p5) {
        p5.clear();
        this.circles.forEach(c => {
            c.render();
        });
        this.cleanup();
    }

    cleanup() {
        this.circles = this.circles.filter(c => c.size > 0);
        if (this.circles.length <= 0) {
            p5.noLoop();
        }
    }

    init() {
        this.sketch = this.sketch.bind(this);
        return new p5(this.sketch);
    }
}

class Circle {
    constructor(p5, x, y, size) {
        this.p5 = p5;
        this.target = this.p5.createVector(x, y);
        this.pos = p5.createVector(0, this.p5.height);
        this.size = size;
        this.step = p5.random(1, 3);
        this.opacity = 100;
        this.step = this.p5
            .createVector(this.target.x, this.target.y)
            .sub(this.pos)
            .div(200);
    }

    shrink() {
        if (this.size >= 0) {
            this.size -= 1;
        }
        this.opacity -= 0.5;
    }

    move() {
        this.pos = this.pos.add(this.step);
    }

    render() {
        this.shrink();
        this.move();
        this.p5.fill(255, 255, 255, this.opacity);
        this.p5.ellipse(this.pos.x, this.pos.y, this.size);
    }
}

export default new Sketch();
