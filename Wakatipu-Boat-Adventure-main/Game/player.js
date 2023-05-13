import {
  Standing,
  Running,
  Jumping,
  Falling,
  Batting,
} from "./PlayerStates.js";
export class Player {
  constructor(game) {
    this.game = game;
    this.width = 420;
    this.height = 320;
    this.vy = 0;
    this.weight = 1;
    this.x = 0;
    this.y = this.game.height - this.height - this.game.groundMargin;
    this.image = document.getElementById("player");
    this.weapon = document.getElementById("baseball");
    this.frameX = 1;
    this.frameY = 2;
    this.maxFrame = 2;

    this.fps = 2;
    this.frameInterval = 1000 / this.fps;
    this.frameTimer = 0;
    this.sfx = {
      push: new Howl({
        src: ["https://assets.codepen.io/21542/howler-push.mp3"],
      }),
      boost: new Howl({
        src: ["https://assets.codepen.io/21542/howler-sfx-levelup.mp3"],
      }),
      Hit: new Howl({
        src: ["./Asset/sound/slash.wav"],
      }),
    };

    this.speed = 0;
    this.maxSpeed = 15;
    this.states = [
      // order is important
      new Standing(this),
      new Running(this),
      new Jumping(this),
      new Falling(this),
      new Batting(this),
    ];
    this.currentState = this.states[0];
    this.currentState.enter();
  }
  update(input, deltaTime) {
    this.checkCollosion();
    this.currentState.handleInput(input);
    // horizontal movement
    this.x += this.speed;
    // maintaining speed
    if (input.includes("ArrowRight")) {
      this.speed = this.maxSpeed;
    } else if (input.includes("ArrowLeft")) {
      this.speed = -this.maxSpeed;
    } else this.speed = 0;
    // Constrains
    if (this.x < 0) this.x = 0;

    if (this.x > this.game.width - this.width) {
      this.x = this.game.width - this.width;
    }
    // Vertical movement

    // if (input.includes("ArrowUp") && this.onGround()) {
    //   this.vy -= 30;
    // }
    this.y += this.vy;
    if (!this.onGround()) this.vy += this.weight;
    else this.vy = 0;
    // sprite anime
    if (this.frameY !== 0) {
      if (this.frameTimer > this.frameInterval) {
        this.frameTimer = 0;
        if (this.frameX < this.maxFrame) this.frameX; //update next frame;
        if (this.frameX == 1 && this.frameY == 1) {
          this.frameX++;
          this.sfx.Hit.play();
        } else this.frameX = 0;
      } else {
        this.frameTimer += deltaTime;
      }
    }
  }
  draw(context) {
    if (this.game.debug) {
      context.strokeRect(this.x, this.y, this.width, this.height);
    }
    context.drawImage(
      this.image,
      this.frameX * this.width - 168, //change of frame would occur
      this.frameY * this.height,
      this.width,
      this.height,
      this.x,
      this.y,
      this.width,
      this.height
    );
  }
  onGround() {
    return this.y >= this.game.height - this.height - this.game.groundMargin;
  }
  setState(state) {
    this.currentState = this.states[state];
    this.currentState.enter();
  }

  checkCollosion() {
    this.game.enemies.forEach((enemy) => {
      if (
        enemy.x < this.x + this.width &&
        enemy.x + enemy.width > this.x &&
        enemy.y < this.y + this.height &&
        enemy.y + enemy.height > this.y &&
        (this.frameX == 1 || (this.frameX == 2 && this.frameY == 1))
      ) {
        this.sfx.boost.play();
        enemy.markedForDeletion = true;
        this.game.score++;
      } else if (
        enemy.x < this.x + this.width &&
        enemy.x + enemy.width > this.x &&
        enemy.y < this.y + this.height &&
        enemy.y + enemy.height > this.y
      ) {
        this.sfx.push.play();

        enemy.markedForDeletion = true;
        this.game.score--;
      }
    });
  }
}
