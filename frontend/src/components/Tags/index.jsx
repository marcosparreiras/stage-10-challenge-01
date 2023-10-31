import { Container } from './styles';

/* eslint-disable */
function Tag({ title, ...rest }) {
    return (
        <Container {...rest}>
            <span>{title}</span>
        </Container>
    );
}

export default Tag;
