import * as Separator from "@radix-ui/react-separator";
import { styled } from "@stitches/react";

const Root = styled(Separator.Root, {
  backgroundColor: "White",
  height: "1px",
  width: "100%",
  margin: "0px 0px 10px",
});

const SeparatorDemo = () => <Root />;

export default SeparatorDemo;
