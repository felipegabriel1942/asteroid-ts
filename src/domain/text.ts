import { UIObject } from './ui-object';

export class Text extends UIObject {
  constructor(id: string, textContent: string) {
    super();

    this._id = id;
    this._textContent = textContent;
  }

  public render(): void {
    const el = document.createElement('span');
    el.textContent = this._textContent;
    el.id = this._id;

    const container = document.getElementById('container');

    if (container) container.appendChild(el);
  }
}
