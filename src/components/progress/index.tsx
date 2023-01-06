import React from "react";
import { color } from "../../colors";
import { styled } from "@stitches/react";
import * as Progress from "@radix-ui/react-progress";
import Separator from "../separator";

const Layout = styled("div", {
  marginBottom: 20,
});
const Header = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
const Content = styled("div", {});
const Title = styled("div", {});
const Percent = styled("div", {});

const Root = styled(Progress.Root, {
  position: "relative",
  overflow: "hidden",
  background: color("cyan", 1),
  borderRadius: 99,
  height: 15,
  transform: "translateZ(0)",
});

const Indicator = styled(Progress.Indicator, {
  backgroundColor: color("cyan", 7),
  width: "100%",
  height: "100%",
  transition: "transform 1660ms cubic-bezier(0.65, 0, 0.35, 1)",
});

export interface ProgressDemoProps {
  progress: number;
}

const ProgressDemo = (props: ProgressDemoProps) => {
  const [progress, setProgress] = React.useState(props.progress);

  React.useEffect(() => {
    const timer = setTimeout(() => setProgress(props.progress), 500);
    return () => clearTimeout(timer);
  }, [props.progress]);

  return (
    <Layout>
      <Header>
        <Title>Checklist</Title>
        <Percent>{`${progress ?? 0}%`}</Percent>
      </Header>
      <Separator />
      <Content>
        <Root value={66}>
          <Indicator style={{ transform: `translateX(-${100 - progress}%)` }} />
        </Root>
      </Content>
    </Layout>
  );
};

export default ProgressDemo;
