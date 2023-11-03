import { Button } from './../domain/button';
export class ButtonBuilder {
  private _id!: string;
  private _textContent!: string;

  public id(id: string): ButtonBuilder {
    this._id = id;
    return this;
  }

  public textContent(textContent: string): ButtonBuilder {
    this._textContent = textContent;
    return this;
  }

  public build() {
    return new Button(this._id, this._textContent);
  }
}
