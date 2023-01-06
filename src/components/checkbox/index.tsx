import React, { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";
import { ToDoItem } from "../list";
import { color } from "../../colors";

const Layout = styled("div", {
  padding: 2,
  display: "flex",
});

const Label = styled("label", {
  marginLeft: 10,
});

const Root = styled(Checkbox.Root, {
  display: "flex",
  height: 10,
  width: 10,
  padding: 10,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: color("cyan", 8),
  "&:focus": {
    outline: 0,
  },
  "&:hover": {
    borderColor: "black",
  },
});

const Indicator = styled(Checkbox.Indicator, {
  display: "flex",
});

const CheckboxDemo = (props: ToDoItem) => {
  const [checked, setChecked] = useState(props.checked);
  return (
    <Layout>
      <Root checked={checked} onClick={() => setChecked((checked) => !checked)}>
        <Indicator>
          <CheckIcon />
        </Indicator>
      </Root>
      <Label>{props.description}</Label>
    </Layout>
  );
};

export default CheckboxDemo;
