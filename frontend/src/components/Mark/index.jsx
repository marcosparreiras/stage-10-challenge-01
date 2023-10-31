import { Container } from './styles';
import { FiX, FiPlus } from 'react-icons/fi';

/* eslint-disable */
function Mark({ value, onClick, isnew = false, ...rest }) {
    return (
        <Container $mode={isnew}>
            <input
                type='text'
                value={value}
                readOnly={isnew}
                placeholder='Novo marcador'
                {...rest}
            />
            <button type='button' onClick={onClick}>
                {isnew ? <FiX /> : <FiPlus />}
            </button>
        </Container>
    );
}

export default Mark;
