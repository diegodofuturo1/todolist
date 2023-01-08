import Card, { CardProps } from "../card";
import Layout from "../layout";
import Popover from "../popover";

export interface BoardProps {
  title: string;
  cards: CardProps[];
}

function Board(props: BoardProps) {
  const renderCards = () => {
    return props.cards.map((card) => (
      <Card title={card.title} description={card.description} />
    ));
  };

  return (
    <Layout
      title={props.title}
      content={renderCards()}
      options={<Popover title="Opções" component={""} />}
    />
  );
}

export default Board;
