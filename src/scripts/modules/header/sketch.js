import p5 from 'p5';
import Ball from './Ball.js';

class Sketch{
    constructor(){
        this.WRAPPER = document.getElementById('header-sketch');
        this.CANVAS_HEIGHT = this.WRAPPER.offsetHeight;
        this.CANVAS_WIDTH = window.innerWidth;
        this.BALLS_AMOUNT = 5;

        this.balls = [];
    }

    sketch(p5){
        p5.setup = () => this.setup(p5);
        p5.draw = () => this.draw(p5);
    };

    setup(p5){
        const { CANVAS_HEIGHT, CANVAS_WIDTH, WRAPPER, BALLS_AMOUNT } = this;
        p5.createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT).parent(WRAPPER);
        for (let i = 0 ; i < BALLS_AMOUNT ; i++){
            this.balls.push(new Ball({ p5, CANVAS_WIDTH, CANVAS_HEIGHT }));
        }
    }

    draw(p5){
        p5.clear();
        this.balls.forEach(ball => {
            ball.update();
            ball.render();
        })
    }

    init(){
        this.sketch = this.sketch.bind(this);
        return new p5(this.sketch);
    }
}

export default new Sketch();
