import { Asteroid } from './asteroid';
import { State } from './state';
import { Vector2D } from './vector-2d';

export class AsteroidSpawner {
  private intervalBetweenSpawns: number = 2;
  private spawnPositions: Vector2D[] = [];
  private hasSpawned: boolean = false;
  private timeSinceLastSpawn: number = 0;

  constructor() {
    this.spawnPositions.push(
      ...[new Vector2D({ x: 80, y: -50 }), new Vector2D({ x: 180, y: -50 })],
    );
  }

  public spawnAsteroids(): void {
    const state = State.getInstance();

    if (!this.hasSpawned) {
      this.hasSpawned = true;
      this.timeSinceLastSpawn = 0;
      const newAsteroid = new Asteroid();
      const position = this.getRandomSpawnPosition();

      newAsteroid.position = new Vector2D({
        x: position.x,
        y: position.y,
      });

      state.gameObjects.push(newAsteroid);
    }

    this.timeSinceLastSpawn++;

    if (
      this.hasSpawned &&
      this.timeSinceLastSpawn / 60 > this.intervalBetweenSpawns
    ) {
      this.hasSpawned = false;
    }
  }

  private getRandomSpawnPosition(): Vector2D {
    const randomIndex = this.getRandomNumberBetweenRange(
      0,
      this.spawnPositions.length - 1,
    );
    return this.spawnPositions[randomIndex];
  }

  public getRandomNumberBetweenRange(min: number, max: number) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
