import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: ${({ theme, $mode }) =>
        $mode ? theme.COLORS.GRAY_600 : 'none'};
    padding: 1.6rem;
    border-radius: 1rem;
    border: ${({ $mode, theme }) =>
        $mode ? 'none' : `1px dashed ${theme.COLORS.GRAY_300}`};

    > button {
        color: ${({ theme }) => theme.COLORS.PINK};
        background: none;
        border: none;
        svg {
            height: 2.4rem;
            width: 2.4rem;
        }
    }

    > input {
        background: none;
        border: none;
        outline: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }
`;
