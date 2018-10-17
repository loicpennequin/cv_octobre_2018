class Ball{
    constructor(cfg){
        Object.assign(this, cfg);
        this._x = Math.random() * this.CANVAS_WIDTH;
        this._y = Math.random() * this.CANVAS_HEIGHT;

        this.gravity= 1;
        this.width = 10;
        this.height = 10;
        this.pos = this.p5.createVector(this._x, this._y);
    }

    update(){
        this.pos.y += this.gravity;
    }

    render(){
        const { p5, width, height, pos } = this;

        p5.noStroke();
        p5.ellipse(pos.x, pos.y, width, height);
    }
}

export default Ball;
