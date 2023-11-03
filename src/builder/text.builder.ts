import { Text } from '../domain/text';

export class TextBuilder {
  private _id!: string;
  private _textContent!: string;

  public id(id: string): TextBuilder {
    this._id = id;
    return this;
  }

  public textContent(textContent: string): TextBuilder {
    this._textContent = textContent;
    return this;
  }

  public build() {
    return new Text(this._id, this._textContent);
  }
}
