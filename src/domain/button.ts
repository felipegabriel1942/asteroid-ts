import { UIObject } from './ui-object';

export class Button extends UIObject {
  constructor(id: string, textContent: string) {
    super();

    this._id = id;
    this._textContent = textContent;
  }

  public render(): void {
    const el = document.createElement('button');
    el.textContent = this._textContent;
    el.id = this._id;

    const container = document.getElementById('container');

    if (container) container.appendChild(el);
  }

  public get id(): string {
    return this._id;
  }

  public get textContent(): string {
    return this._textContent;
  }
}
