import Card from "../entities/card.entity";
import { EntityService } from "./entity.service";

export class CardService extends EntityService<Card> {
  constructor() {
    super("card");
  }
}
