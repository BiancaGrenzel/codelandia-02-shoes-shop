import Alert from "../../core/components/alert";
import Header from "../../core/components/header";
import Menu from "../../core/components/menu";
import { Container, Section } from "./style";

const Home = () => {
    return (
        <Container>
            <Section>
                <Alert text="Ganhe R$ 10,00 de desconto no frete"/>
                <Menu/>
                <Header/>
            </Section>
            <Alert text="Todos os direitos reservados."/>
        </Container>
    );
};

export default Home;
