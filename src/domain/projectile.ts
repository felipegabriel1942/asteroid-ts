import { Asteroid } from './asteroid';
import { Player } from './player';
import { GameObject } from './game-object';
import { Vector2D } from './vector-2d';
import { State } from './state';

import { CanvasUtils } from './../utils/canvas.utils';

import ProjectileImg from '../resources/image/projectile-01.png';

export class Projectile extends GameObject {
  public img = new Image();

  constructor() {
    super();

    const player = Player.getInstance();

    this.width = 15;
    this.height = 15;

    this.position = new Vector2D({
      x: player.position.x + (player.width / 2 - this.width / 2),
      y: player.position.y,
    });

    this.speed = new Vector2D({
      x: 0,
      y: -5,
    });

    this.img.src = ProjectileImg;
  }

  public move(): void {
    this.position.y += this.speed.y;
  }

  public collide(): void {
    State.getInstance().gameObjects = State.getInstance().gameObjects.map(
      (obj) => {
        // TODO: Melhorar detecção de colisoes
        if (
          obj instanceof Asteroid &&
          this.position.x > obj.position.x &&
          this.position.x < obj.position.x + obj.width &&
          this.position.y > obj.position.y &&
          this.position.y < obj.position.y + obj.height
        ) {
          obj.isAlive = false;
          this.isAlive = false;
        }

        return obj;
      },
    );
  }

  public draw(): void {
    CanvasUtils.drawGameObject(this);
  }

  public shoot(): void {}
}
