const states = {
  // order is important
  STANDING: 0,
  RUNNING: 1,
  JUMPING: 2,
  FALLING: 3,
  BATTING: 4,
  HIT: 5,
};

class State {
  constructor(state) {
    this.state = state;
  }
}

export class Standing extends State {
  constructor(player) {
    super("STANDING");
    this.player = player;
  }
  enter() {
    this.player.frameY = 0;
    this.player.frameX = 0;
  }
  // below method  would run 60 times per second
  handleInput(input) {
    if (input.includes("ArrowLeft") || input.includes("ArrowRight")) {
      this.player.setState(states.RUNNING);
    } else if (input.includes("Enter")) {
      this.player.setState(states.BATTING);
    }
  }
}

export class Running extends State {
  constructor(player) {
    super("RUNNING");
    this.player = player;
  }
  enter() {
    this.player.frameY = 1;
    this.player.frameX = 0;
  }
  // below method  would run 60 times per second
  handleInput(input) {
    if (input.includes("ArrowDown")) {
      this.player.setState(states.STANDING);
    } else if (input.includes("ArrowUp")) {
      this.player.setState(states.JUMPING);
    } else if (input.includes("Enter")) {
      this.player.setState(states.BATTING);
    }
  }
}

export class Jumping extends State {
  constructor(player) {
    super("JUMPING");
    this.player = player;
  }
  enter() {
    console.log("hy");
    if (this.player.onGround()) this.player.vy -= 30;
    this.player.frameY = 2;
    this.player.frameX = 0;
  }
  // below method  would run 60 times per second
  handleInput(input) {
    if (this.player.vy > this.player.weight) {
      this.player.setState(states.FALLING);
    } else if (input.includes("Enter")) {
      this.player.setState(states.BATTING);
    }
  }
}
export class Falling extends State {
  constructor(player) {
    super("FALLING");
    this.player = player;
  }
  enter() {
    this.player.frameY = 2;
    this.player.frameX = 0;
  }
  // below method  would run 60 times per second
  handleInput(input) {
    if (this.player.onGround()) {
      this.player.setState(states.RUNNING);
    } else if (input.includes("Enter")) {
      this.player.setState(states.BATTING);
    }
  }
}

export class Batting extends State {
  constructor(player) {
    super("BATTING");
    this.player = player;
  }
  enter() {
    this.player.frameY = 1;
    this.player.frameX = 1;
  }
  // below method  would run 60 times per second
  handleInput(input) {
    if (!input.includes("Enter") && this.player.onGround()) {
      this.player.setState(states.RUNNING);
    } else if (!input.includes("Enter") && !this.player.onGround()) {
      this.player.setState(states.FALLING);
    }
  }
}
