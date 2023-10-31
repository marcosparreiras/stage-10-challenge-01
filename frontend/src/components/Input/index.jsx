import { Container } from './styles';

/* eslint-disable */
function Input({ icon: Icon, ...rest }) {
    return (
        <Container>
            {Icon && <Icon />}
            <input {...rest} />
        </Container>
    );
}

export default Input;
