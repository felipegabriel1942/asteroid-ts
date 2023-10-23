import { Asteroid } from './asteroid';
import type { GameObject } from './game-object';
import { Player } from './player';

export class State {
  public gameObjects: GameObject[] = [];

  private static instance: State;

  private constructor() {
    this.gameObjects.push(Player.getInstance(), new Asteroid());
  }

  public static getInstance(): State {
    if (!State.instance) {
      State.instance = new State();
    }

    return State.instance;
  }
}
