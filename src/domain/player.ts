import { State } from './state';
import { Control } from './control';
import { GameObject } from './game-object';
import { Vector2D } from './vector-2d';
import { Projectile } from './projectile';

import { CanvasUtils } from './../utils/canvas.utils';

import SpaceshipImg from '../resources/image/spaceship-01.png';

export class Player extends GameObject {
  public intervalBetweenShoots: number = 0.4;
  private hasShooted: boolean = false;
  private timeSinceLastShoot: number = 0;

  private static instance: Player;

  private constructor() {
    super();

    this.width = 40;
    this.height = 40;

    this.position = new Vector2D({
      x: (CanvasUtils.canvasWidth - this.width) / 2,
      y: CanvasUtils.canvasHeight - this.height,
    });

    this.speed = new Vector2D({ x: 4, y: 0 });
    this.img.src = SpaceshipImg;
  }

  public static getInstance(): Player {
    if (!Player.instance) {
      Player.instance = new Player();
    }

    return Player.instance;
  }

  public move(): void {
    const control = Control.getInstance();

    if (control.right) {
      this.position.x += this.speed.x;

      if (this.position.x + this.width > CanvasUtils.canvasWidth) {
        this.position.x = CanvasUtils.canvasWidth - this.width;
      }
    } else if (control.left) {
      this.position.x -= this.speed.x;

      if (this.position.x < 0) {
        this.position.x = 0;
      }
    }
  }
  public collide(): void {}

  public draw(): void {
    CanvasUtils.drawGameObject(this);
  }

  public shoot(): void {
    const control = Control.getInstance();
    const state = State.getInstance();

    if (control.shoot && !this.hasShooted) {
      this.hasShooted = true;
      this.timeSinceLastShoot = 0;
      state.gameObjects.push(new Projectile());
    }

    this.timeSinceLastShoot++;

    if (
      this.hasShooted &&
      this.timeSinceLastShoot / 60 > this.intervalBetweenShoots
    ) {
      this.hasShooted = false;
    }
  }
}
