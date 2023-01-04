import { styled } from "@stitches/react";
import { ReactNode } from "react";
import { color } from "../../colors";

const Main = styled("div", {
  display: "block",
  width: 300,
  backgroundColor: color("cyan"),
  color: "black",
  borderRadius: 20,
  margin: 10,
  border: "0px solid #000000",
  boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.75)",
});

const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
  padding: "10px 20px",
  alignItems: "center",
  height: 30,
  backgroundColor: color("cyan", 7),
  color: "white",
  borderRadius: "20px 20px 0 0",
});

const Title = styled("div", {});
const Content = styled("div", {});

const Options = styled("div", {
  cursor: "pointer",
  "&:hover": {
    fontSize: "1.3EM",
  },
});

const Body = styled("div", {
  display: "flex",
  flexWrap: "wrap",
  padding: "15px 10px 10px 10px",
  overflow: "hidden",
  overflowY: "hidden",
  minHeight: 100,
});

export interface ComponentProps {
  title: string;
  options?: ReactNode;
  content: ReactNode;
}

const Layout = (props: ComponentProps) => (
  <Main>
    <Header>
      <Title>{props.title}</Title>
      <Options>{props.options}</Options>
    </Header>
    <Body>{props.content}</Body>
  </Main>
);

export default Layout;
