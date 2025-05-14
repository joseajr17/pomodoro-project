import { MainTemplate } from "../../templates/MainTemplate";
import { Container } from "../../components/Container";
import { Counter } from "../../components/Counter";
import { Form } from "../../components/Form";

export function Home() {
    return (
        <MainTemplate>
            <Container>
                <Counter />
            </Container>

            <Container>
                <Form />
            </Container>
        </MainTemplate>
    )
}