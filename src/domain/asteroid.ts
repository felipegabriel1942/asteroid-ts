import { GameObject } from './game-object';
import { Vector2D } from './vector-2d';
import { CanvasUtils } from './../utils/canvas.utils';

import AsteroidImg from './../resources/image/asteroid-01.png';

export class Asteroid extends GameObject {
  constructor() {
    super();

    this.width = 50;
    this.height = 50;

    this.position = new Vector2D({
      x: (CanvasUtils.canvasWidth - this.width) / 2,
      y: 0 + this.height,
    });

    this.speed = new Vector2D({
      x: 0,
      y: 2,
    });

    this.img.src = AsteroidImg;
  }

  public move(): void {
    this.position.y += this.speed.y;
  }

  public collide(): void {}

  public draw(): void {
    CanvasUtils.drawGameObject(this);
  }

  public shoot(): void {}
}
