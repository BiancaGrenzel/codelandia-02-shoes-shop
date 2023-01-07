import { Container } from "./style";

interface AlertProps {
    text: string;
}

const Alert = ({text}: AlertProps) => {
    return (
        <Container>
            {text}
        </Container>
    )
}

export default Alert;