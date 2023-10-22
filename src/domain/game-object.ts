import type { Vector2D } from './vector-2d';

import { CanvasUtils } from './../utils/canvas.utils';

export abstract class GameObject {
  public position!: Vector2D;
  public ctx: CanvasRenderingContext2D = CanvasUtils.getContext();
  public canvas: HTMLCanvasElement = CanvasUtils.getCanvas();

  public abstract move(): void;

  public abstract collide(): void;

  public abstract draw(): void;

  public abstract shoot(): void;
}
