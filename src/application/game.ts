import { State } from './../domain/state';
import { CanvasUtils } from './../utils/canvas.utils';

export class Game {
  public state: State = State.getInstance();

  constructor() {}

  public run(): void {
    console.log('running...');

    CanvasUtils.clearCanvas();

    this.state.gameObjects.forEach((obj) => {
      obj.move();
      obj.shoot();
      obj.draw();
    });

    this.state.gameObjects = this.state.gameObjects.filter(
      (obj) => obj.position.y > 0,
    );

    requestAnimationFrame(() => this.run());
  }
}
