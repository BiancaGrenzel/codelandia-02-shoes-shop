import { Container } from "./style";

interface CardProps {
    image: string;
    alt: string;

}

const Card = ({image, alt}: CardProps) => {
    return(
        <Container>
            <img src={image} alt={alt}/>
        </Container>
    )
}

export default Card;