import { ReactNode } from "react";
import Layout from "../layout";
import { color } from "../../colors";
import { Root, Trigger, Portal, Content, Close } from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { styled } from "@stitches/react";

const CloseButton = styled(Close, {
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

export interface PopoverProps {
  title: string;
  component: ReactNode;
  trigger?: ReactNode;
}

const Popover = (props: PopoverProps) => (
  <Root>
    <Trigger asChild>{props.trigger ?? <MixerHorizontalIcon />}</Trigger>
    <Portal>
      <Content>
        <Layout
          title={props.title}
          content={props.component}
          options={
            <CloseButton>
              <Cross2Icon />
            </CloseButton>
          }
        />
      </Content>
    </Portal>
  </Root>
);

export default Popover;
