import { Footer } from "@/components/Footer";
import { Container } from "../../components/Container"
import { Menu } from "../../components/Menu";

type MainTemplateProps = {
    children: React.ReactNode
}

export function MainTemplate({ children }: MainTemplateProps) {
    return (
        <>
            <Container justifyType="justify-start">
                <Menu />
            </Container>

            {children}

            <Container>
                <Footer />
            </Container>
        </>
    )
}