import styled from 'styled-components';

export const Container = styled.button`
    width: 100%;
    height: 4.8rem;
    border-radius: 1rem;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.8rem;
    background-color: ${({ theme, mode }) =>
        mode === 'light' ? theme.COLORS.PINK : theme.COLORS.BLACK};
    color: ${({ theme, mode }) =>
        mode === 'light' ? theme.COLORS.BLACK : theme.COLORS.PINK};
`;
