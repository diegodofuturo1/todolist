import { Entity } from "./entity";

export default class Card implements Entity {
  constructor(
    public readonly id: string,
    public readonly boardId: string,
    public readonly title: string,
    public readonly description: string
  ) {}
}
