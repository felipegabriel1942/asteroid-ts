import { Player } from './player';
import { GameObject } from './game-object';
import { Vector2D } from './vector-2d';

import ProjectileImg from '../resources/image/projectile-01.jpeg';

export class Projectile extends GameObject {
  public img = new Image();

  constructor() {
    super();

    const player = Player.getInstance();

    this.position = new Vector2D({
      x: player.position.x,
      y: player.position.y,
    });

    this.img.src = ProjectileImg;
  }

  public move(): void {
    this.position.y += -4;
  }

  public collide(): void {
    throw new Error('Method not implemented.');
  }

  public draw(): void {
    this.ctx.drawImage(this.img, this.position.x, this.position.y, 10, 10);
  }

  public shoot(): void {
  }
}
