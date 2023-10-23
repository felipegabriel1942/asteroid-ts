import type { Vector2D } from './vector-2d';

export abstract class GameObject {
  public position!: Vector2D;
  public speed!: Vector2D;
  public img = new Image();
  public width!: number;
  public height!: number;
  public isAlive: boolean = true;

  public abstract move(): void;

  public abstract collide(): void;

  public abstract draw(): void;

  public abstract shoot(): void;
}
