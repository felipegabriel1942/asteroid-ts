import type { GameObject } from 'src/domain/game-object';
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
      obj.collide();
      obj.draw();
    });

    this.state.gameObjects = this.garbageCollector();

    requestAnimationFrame(() => this.run());
  }

  private garbageCollector(): GameObject[] {
    return this.state.gameObjects.filter(
      (obj) => (obj.position.y > 0 || obj.position.x > 0) && obj.isAlive,
    );
  }
}
