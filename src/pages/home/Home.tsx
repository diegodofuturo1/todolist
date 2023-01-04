import { styled } from "@stitches/react";
import Board from "../../components/board";

const HomeLayout = styled("div", {
  padding: "50px 100px",
  display: "flex",
});

export default function Home() {
  return (
    <HomeLayout>
      <Board
        title="To Do List"
        cards={[
          { title: "Banco de Dados" },
          { title: "API" },
          { title: "Site" },
        ]}
      />
      {/* <Board
        title="To Do List"
        cards={[
          { title: "Banco de Dados" },
          { title: "API" },
          { title: "Site" },
        ]}
      />
      <Board
        title="To Do List"
        cards={[
          { title: "Banco de Dados" },
          { title: "API" },
          { title: "Site" },
        ]}
      /> */}
    </HomeLayout>
  );
}
