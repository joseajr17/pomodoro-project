import { Heading } from "./components/Heading";
import { Container } from "./components/Container";
import { Logo } from "./components/Logo";

export function App() {
  return (
    <>
      <Container>
        <Logo />
      </Container>
      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  )
}