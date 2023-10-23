import type { GameObject } from 'src/domain/game-object';

export class CanvasUtils {
  private static canvas(): HTMLCanvasElement {
    return document.getElementById('game-canvas') as HTMLCanvasElement;
  }

  private static context(): CanvasRenderingContext2D {
    const context = this.canvas().getContext('2d') as CanvasRenderingContext2D;
    context.imageSmoothingEnabled = false;
    return context;
  }

  public static get canvasWidth(): number {
    return this.canvas()?.width;
  }

  public static get canvasHeight(): number {
    return this.canvas()?.height;
  }

  public static clearCanvas(): void {
    const ctx = this.context();
    const canvas = this.canvas();

    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }

  public static drawGameObject(gameObject: GameObject): void {
    const { img, position, width, height } = gameObject;
    this.context().drawImage(img, position.x, position.y, width, height);
  }
}
