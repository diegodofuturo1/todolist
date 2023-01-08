import { Entity } from "./entity";

export default class Checklist implements Entity {
  constructor(
    public readonly id: string,
    public readonly cardId: string,
    public readonly completed: boolean,
    public readonly description: string
  ) {}
}
