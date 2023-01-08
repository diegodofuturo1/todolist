import Checklist from "../entities/checklist.entity";
import { EntityService } from "./entity.service";

export class ChecklistService extends EntityService<Checklist> {
  constructor() {
    super("checklist");
  }
}
