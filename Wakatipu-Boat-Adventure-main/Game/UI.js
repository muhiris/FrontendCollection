export class UI {
  constructor(game) {
    this.game = game;
    this.fontSize = 100;
    this.fontFamily = "Helvetica";
  }
  draw(context) {
    context.font = this.fontSize + "px " + this.fontFamily;
    context.textAlign = "left";
    context.fillStyle = this.game.fontColor;
    //score
    context.fillText("Score: " + this.game.score, 40, 100);
    //timer
    context.font = this.fontSize * 0.5 + "px " + this.fontFamily;
    context.fillText("Time: " + parseInt(this.game.time) / 1000, 20, 200);
    // game over messages
    if (this.game.gameOver) {
      context.textAlign = "center";
      context.font = this.fontSize * 2 + "px " + this.fontFamily;
      context.fillText(
        "you're gone",
        this.game.width * 0.5,
        this.game.height * 0.5
      );
    }
  }
}
