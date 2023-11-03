import type { GameObject } from './../domain/game-object';
import type { UIObject } from './../domain/ui-object';

import { HtmlUtils } from './../utils/html.util';
import { TextBuilder } from './../builder/text.builder';

import { ButtonBuilder } from './../builder/button.builder';
import { AsteroidSpawner } from './../domain/asteroid-spawner';
import { State } from './../domain/state';

import { CanvasUtils } from './../utils/canvas.utils';

export class Game {
  public state: State = State.getInstance();
  public asteroidSpawner: AsteroidSpawner = new AsteroidSpawner();
  public START_BUTTON_ID = 'start-btn';
  public PAUSE_BUTTON_ID = 'pause-btn';
  public CONTINUE_BUTTON_ID = 'continue-btn';
  public isPaused = false;
  public UIElements: UIObject[] = [];

  constructor() {}

  public init(): void {
    this.createUiElements();
  }

  public run(): void {
    if (!this.isPaused) {
      CanvasUtils.clearCanvas();

      this.asteroidSpawner.spawnAsteroids();

      this.state.gameObjects.forEach((obj) => {
        obj.move();
        obj.shoot();
        obj.collide();
        obj.draw();
      });

      this.state.gameObjects = this.garbageCollector();

      requestAnimationFrame(() => this.run());
    }
  }

  private garbageCollector(): GameObject[] {
    return this.state.gameObjects.filter(
      (obj) => (obj.position.y > 0 || obj.position.x > 0) && obj.isAlive,
    );
  }

  private createUiElements(): void {
    // START BUTTON
    const startBtn = new ButtonBuilder()
      .id(this.START_BUTTON_ID)
      .textContent('Start Game')
      .build();

    this.UIElements.push(startBtn);

    // //-------------------------------------------------------

    // // TODO: o evento de pausa/coninuar deve ser lançado pelo botão enter do teclado
    // const pauseBtn = new ButtonBuilder()
    //   .id(this.PAUSE_BUTTON_ID)
    //   .textContent('Pause')
    //   .build();

    // pauseBtn.render();

    // document
    //   .getElementById(this.PAUSE_BUTTON_ID)
    //   ?.addEventListener('click', () => {
    //     this.isPaused = true;
    //     this.run();
    //     this.hideElement(this.PAUSE_BUTTON_ID);
    //     this.showElement(this.CONTINUE_BUTTON_ID);
    //   });

    // //-------------------------------------------------------

    // const continueBtn = new ButtonBuilder()
    //   .id(this.CONTINUE_BUTTON_ID)
    //   .textContent('Continue')
    //   .build();

    // continueBtn.render();

    // document
    //   .getElementById(this.CONTINUE_BUTTON_ID)
    //   ?.addEventListener('click', () => {
    //     this.isPaused = false;
    //     this.run();
    //     this.showElement(this.PAUSE_BUTTON_ID);
    //     this.hideElement(this.CONTINUE_BUTTON_ID);
    //   });

    // GAME TITLE
    const gameTitle = new TextBuilder()
      .id('game-title')
      .textContent('ASTEROID TS')
      .build();

    this.UIElements.push(gameTitle);

    // GAME SCORE
    const gameScore = new TextBuilder()
      .id('game-score')
      .textContent('00000000')
      .build();

    this.UIElements.push(gameScore);

    this.UIElements.forEach((el) => el.render());

    HtmlUtils.hideElement('game-score');

    document
      .getElementById(this.START_BUTTON_ID)
      ?.addEventListener('click', () => {
        this.run();
        HtmlUtils.hideElement(this.START_BUTTON_ID);
        HtmlUtils.hideElement('game-title');
        HtmlUtils.showElement('game-score');
      });
  }
}
