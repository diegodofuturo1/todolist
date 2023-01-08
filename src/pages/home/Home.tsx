import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import BoardComponent from "../../components/board";
import Board from "../../entities/board.entity";
import Card from "../../entities/card.entity";
import { BoardDto, BoardService } from "../../services/board.service";
import { EntityService } from "../../services/entity.service";

const HomeLayout = styled("div", {
  padding: "50px 100px",
  display: "flex",
});

export default function Home() {
  const [state, setState] = useState<BoardDto[]>([]);

  useEffect(() => {
    const execute = async () => {
      const boards: BoardDto[] = await new BoardService().getBoards();

      setState(boards);
    };
    execute();
  }, []);

  const renderBoards = () => {
    return state.map((board) => (
      <BoardComponent title={board.title} cards={board.cards} />
    ));
  };

  return <HomeLayout>{renderBoards()}</HomeLayout>;
}
