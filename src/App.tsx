import { Container } from './components/container/index.tsx';

function App() {
  return (
    <Container as="ul">
      {[1, 2, 3].map((item) => (
        <Container
          as="li"
          css={{
            color: 'white',
            bg: 'primary',
            p: 's',
            m: 's'
          }}
        >
          List item {item}
        </Container>
      ))}
    </Container>
  );
}

export default App;
