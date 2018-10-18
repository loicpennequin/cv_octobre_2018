import p5 from 'p5/lib/p5.min.js';
import Circle from './Circle.js';

class Sketch {
    constructor() {
        this.wrapper = document.getElementById('header-sketch');
        this.canvasHeight = this.wrapper.offsetHeight;
        this.canvasWidth = window.innerWidth;
        this.circlesCount = 35;
        this.circleMinSize = 300;
        this.circleMaxSize = 500;
        this.circles = [];
        this.restartTimeout = 5000;
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
        this.initSmoke(p5);
    }

    initSmoke(p5) {
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
        this.cleanup(p5);
    }

    cleanup(p5) {
        this.circles = this.circles.filter(c => c.size > 0);
        if (this.circles.length <= 0) {
            p5.noLoop();
            setTimeout(() => this.restart(p5), this.restartTimeout);
        }
    }

    restart(p5) {
        this.initSmoke(p5);
        p5.loop();
    }

    init() {
        this.sketch = this.sketch.bind(this);
        return new p5(this.sketch);
    }
}

export default new Sketch();
