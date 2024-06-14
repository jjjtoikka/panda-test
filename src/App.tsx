import { css } from "@styled-system/css";
import { Container } from "./components/container/index.tsx";

function App() {
  return (
    <>
      <Container styles={css.raw({ bg: "primary", color: "white" })}>
        Hei do
      </Container>
      <Container css={{ bg: "pink", color: "yellow" }}>Hei do</Container>
    </>
  );
}

export default App;
