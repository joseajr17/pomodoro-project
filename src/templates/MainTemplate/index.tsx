import { Container } from "../../components/Container"
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
    return (
        <>
            <Container>
                <Logo />
            </Container>

            <Container>
                <Menu />
            </Container>

            {children}
        </>
    )
}