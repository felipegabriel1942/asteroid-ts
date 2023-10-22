export class CanvasUtils {
  public static getCanvas(): HTMLCanvasElement {
    return document.getElementById('game-canvas') as HTMLCanvasElement;
  }

  public static getContext(): CanvasRenderingContext2D {
    return this.getCanvas().getContext('2d') as CanvasRenderingContext2D;
  }

  public static clearCanvas(): void {
    this.getContext().clearRect(
      0,
      0,
      this.getCanvas().width,
      this.getCanvas().height,
    );
  }
}
