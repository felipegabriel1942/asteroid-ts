import type { GameObject } from './../domain/game-object';
import { Player } from './../domain/player';
import { CanvasUtils } from './../utils/canvas.utils';

export class Game {
  public gameObjects: GameObject[] = [];

  constructor() {
    this.gameObjects.push(new Player());
  }

  public run(): void {
    console.log('running...');

    CanvasUtils.clearCanvas();

    this.gameObjects.forEach((obj) => {
      obj.move();
      obj.draw();
    });

    requestAnimationFrame(() => this.run());
  }
}
