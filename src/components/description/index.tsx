import { styled } from "@stitches/react";
import { useState } from "react";
import { color } from "../../colors";
import Separator from "../separator";

const Layout = styled("div", {
  marginBottom: 20,
});
const Title = styled("div", {});
const TextArea = styled("textarea", {
  backgroundColor: color("cyan", 1),
  border: color("cyan", 9),
  color: color("cyan", 9),
  minWidth: "100%",
  maxWidth: "100%",
  minHeight: "50px",
  variants: {
    mode: {
      edit: {
        cursor: "text",
      },
      readonly: {
        cursor: "pointer",
      },
    },
  },
});

const ButtonArea = styled("div", {
  variants: {
    visible: {
      true: {
        display: "flex",
      },
      false: {
        display: "none",
      },
    },
  },
});

const Button = styled("button", {
  width: "100px",
  fontSize: "10px",
  backgroundColor: color("cyan", 7),
  marginRight: 10,
  "&:focus": {
    outline: 0,
  },
  "&:hover": {
    border: 0,
  },
});

export interface DescriptionProps {
  description: string;
}

export default (props: DescriptionProps) => {
  const [visible, setVisible] = useState(false);
  const [description, setDescription] = useState(props.description);

  return (
    <Layout>
      <Title>Description</Title>
      <Separator />
      <TextArea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onClick={() => setVisible(true)}
        mode="edit"
      />
      <ButtonArea visible={visible}>
        <Button onClick={() => setVisible(false)}>Salvar</Button>
        <Button onClick={() => setVisible(false)}>Cancelar</Button>
      </ButtonArea>
    </Layout>
  );
};
