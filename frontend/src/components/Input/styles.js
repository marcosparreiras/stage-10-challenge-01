import styled from 'styled-components';

export const Container = styled.div`
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    border-radius: 1rem;
    width: 100%;
    height: 5.6rem;
    display: flex;
    align-items: center;
    padding: 0 1.2rem;
    gap: 1.9rem;

    > svg {
        width: 2rem;
        height: 1.8rem;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
    }

    > input {
        flex: 1;
        background: none;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
