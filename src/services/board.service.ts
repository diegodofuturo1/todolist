import Board from "../entities/board.entity";
import Card from "../entities/card.entity";
import { CardService } from "./card.service";
import { EntityService } from "./entity.service";

export interface BoardDto extends Board {
  cards: Card[];
}

export class BoardService extends EntityService<Board> {
  constructor() {
    super("board");
  }

  async getBoards(): Promise<BoardDto[]> {
    const boards = await this.get();
    const cards = await new CardService().get();

    return boards.map((board) => {
      return {
        ...board,
        cards: cards.filter((card) => card.boardId == board.id),
      };
    });
  }
}
