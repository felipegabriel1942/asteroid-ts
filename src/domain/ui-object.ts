export abstract class UIObject {
  protected _id!: string;
  protected _textContent!: string;

  public abstract render(): void;

}
