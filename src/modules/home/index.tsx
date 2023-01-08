import Alert from "../../core/components/alert";
import Card from "../../core/components/card";
import Header from "../../core/components/header";
import Menu from "../../core/components/menu";
import { Shoes } from "../../core/json/shoes";
import { Container, ListCards, Section } from "./style";

const Home = () => {
    const Cards = () => {
        return Shoes.map((shoe) => {
            return(
                <Card image={shoe.image} alt={shoe.name}/>
            )
        })
    }

    return (
        <Container>
            <Section>
                <Alert text="Ganhe R$ 10,00 de desconto no frete"/>
                <Menu/>
                <Header/>
            </Section>
            <ListCards>
                {Cards()}
            </ListCards>
            <Alert text="Todos os direitos reservados."/>
        </Container>
    );
};

export default Home;
