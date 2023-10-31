import { Container } from './styles';

/* eslint-disable */
function Button({ title, icon: Icon, mode = 'light', ...rest }) {
    return (
        <Container {...rest} mode={mode}>
            {Icon && <Icon />}
            {title}
        </Container>
    );
}

export default Button;
