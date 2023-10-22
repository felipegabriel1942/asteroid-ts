export class Vector2D {
  x: number;
  y: number;

  public constructor({ x = 0, y = 0 } = {}) {
    this.x = x;
    this.y = y;
  }
}