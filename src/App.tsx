import { styled } from "@stitches/react";
import AppRoutes from "./Routes";

const AppLayout = styled("div", {
  height: "100vh",
  width: "100vw",
  background:
    "linear-gradient(90deg, rgba(0,35,41,1) 10%, rgba(0,109,117,1) 90%)",
});

function App() {
  return (
    <AppLayout>
      <AppRoutes />
    </AppLayout>
  );
}

export default App;
