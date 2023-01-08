import { Entity } from "./entity";

export default class Board implements Entity {
  constructor(public readonly id: string, public readonly title: string) {}
}
