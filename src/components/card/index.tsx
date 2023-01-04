import { styled } from "@stitches/react";
import { color } from "../../colors";

const CardLayout = styled("div", {
  backgroundColor: color("cyan", 5),
  cursor: "pointer",
  color: color("cyan", 8),
  width: "100%",
  borderRadius: 6,
  border: "0px solid black",
  boxShadow: "2px 2px 5px 0px rgba(0,0,0,0.5)",
  marginBottom: 10,
  borderLeft: "10px solid " + color("cyan", 4),
  "&:hover": {
    backgroundColor: color("cyan", 4),
    boxShadow: "4px 4px 5px 0px rgba(0,0,0,0.5)",
    marginLeft: -5,
    borderLeft: "10px solid " + color("cyan", 3),
  },
});

const CardHeader = styled("div", {
  display: "flex",
  padding: "5px 10px",
  justifyContent: "start",
});

const CardContent = styled("div", {
  display: "flex",
  padding: "5px 10px",
  justifyContent: "start",
});

export interface CardProps {
  title: string;
}

function Card(props: CardProps) {
  return (
    <CardLayout>
      <CardHeader>{props.title}</CardHeader>
      <CardContent>0/0</CardContent>
    </CardLayout>
  );
}

export default Card;
