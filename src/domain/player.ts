import { State } from './state';
import { Control } from './control';
import { GameObject } from './game-object';

import SpaceshipImg from '../resources/image/spaceship-01.png';
import { Vector2D } from './vector-2d';
import { Projectile } from './projectile';

export class Player extends GameObject {
  public speed!: Vector2D;
  public width: number = 50;
  public height: number = 50;
  public img = new Image();

  private static instance: Player;

  private constructor() {
    super();
    this.position = new Vector2D({
      x: (this.canvas.width - this.width) / 2,
      y: this.canvas.height - this.height,
    });

    console.log(this.position)

    this.speed = new Vector2D({ x: 7, y: 0 });
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

      if (this.position.x + this.width > this.canvas.width) {
        this.position.x = this.canvas.width - this.width;
      }
    } else if (control.left) {
      this.position.x -= this.speed.x;

      if (this.position.x < 0) {
        this.position.x = 0;
      }
    }
  }
  public collide(): void {
    throw new Error('Method not implemented.');
  }

  public draw(): void {
    this.ctx.drawImage(
      this.img,
      this.position.x,
      this.position.y,
      this.width,
      this.height,
    );
  }

  public shoot(): void {
    const control = Control.getInstance();
    const state = State.getInstance();

    if (control.shoot) {
      state.gameObjects.push(new Projectile());
    }
  }
}
