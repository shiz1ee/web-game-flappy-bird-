class Background {
    constructor(game){
        this.game = game;
        this.image = document.getElementById('background');
        this.width = 2400;
        this.height = this.game.baseHeight;
        this.scaledWidth;
        this.scaleHeight;
        this.x;
    }
    update(){
        this.x -= this.game.speed;
        if (this.x <= -this.scaledWidth) this.x = 0;
    }
    draw(){
        if (!this.image) {
            return;
        }
        this.game.ctx.drawImage(this.image, this.x, 0, this.scaledWidth, this.scaleHeight);
        this.game.ctx.drawImage(this.image, this.x + this.scaledWidth, 0, this.scaledWidth, this.scaleHeight);
        if (this.game.canvas.width >= this.scaledWidth) {
            this.game.ctx.drawImage(this.image, this.x + this.scaledWidth * 2, 0, this.scaledWidth, this.scaleHeight);
        }

    }
    resize(){
        this.scaledWidth = this.width * this.game.ratio;
        this.scaleHeight = this.height * this.game.ratio;
        this.x = 0;
    }
}