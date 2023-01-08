import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { color } from "../../colors";
import CheckboxDemo from "../checkbox";
import Description from "../description";
import ProgressDemo from "../progress";

const Main = styled(Dialog.Content, {
  backgroundColor: color("cyan"),
  borderRadius: 20,
  boxShadow: "10px 10px 2000px 1000px rgba(0,0,0,.5)",
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "45%",
  height: "75%",
});

const Root = styled(Dialog.Root, {});
const Portal = styled(Dialog.Portal, {});

const Close = styled(Dialog.Close, {
  display: "flex",
  cursor: "pointer",
  padding: 4,
  color: color("cyan", 0),
  backgroundColor: color("cyan", 7),
  border: "0px solid #000000",
  boxShadow: "1px 1px 3px 0px rgba(0,0,0,0.75)",
  borderRadius: 50,
  "&:focus": {
    outline: 0,
  },
});

const Header = styled("div", {
  display: "flex",
  backgroundColor: color("cyan", 7),
  justifyContent: "space-between",
  height: 30,
  padding: "20px 20px",
  alignItems: "center",
  color: "white",
  borderRadius: "20px 20px 0 0",
});

const Content = styled("div", {
  padding: 20,
});
const List = styled("div", {});
const Title = styled("div", {});

export interface ToDoItem {
  checked: boolean;
  description: string;
}

export interface ToDoListProps {
  description: string;
  open: boolean;
  closeList: () => void;
  title: string;
  toDoItems: ToDoItem[];
}

const ToDoList = (props: ToDoListProps) => {
  const renderToDoItems = () => {
    return props.toDoItems.map((item) => (
      <CheckboxDemo checked={item.checked} description={item.description} />
    ));
  };

  return (
    <Root open={props.open}>
      <Portal>
        <Main>
          <Header>
            <Title>{props.title}</Title>
            <Close onClick={props.closeList}>
              <Cross2Icon />
            </Close>
          </Header>
          <Content>
            <Description description={props.description} />
            <ProgressDemo progress={44} />
            <List>{renderToDoItems()}</List>
          </Content>
        </Main>
      </Portal>
    </Root>
  );
};

export default ToDoList;
