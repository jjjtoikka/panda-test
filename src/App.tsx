import { Container, Grid } from './components/container/index.tsx';

function App() {
  return (
    <Grid as="ul" css={{ gap: 's', columns: [1, 3] }}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
        <Container
          key={`id-${item}`}
          as="li"
          css={{
            transition: 'background',
            color: 'blue.100',
            bg: 'red.400',
            p: 'l',
            _hover: {
              bg: 'red.300'
            }
          }}
        >
          List item {item}
        </Container>
      ))}
    </Grid>
  );
}

export default App;
