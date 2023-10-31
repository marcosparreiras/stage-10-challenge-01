import styled from 'styled-components';

export const Container = styled.div`
    display: inline-block;
    width: fit-content;
    padding: 0.5rem 1.6rem;
    border-radius: 0.8rem;
    background-color: ${({ theme }) => theme.COLORS.GRAY_1000};

    > span {
        color: ${({ theme }) => theme.COLORS.WHITE};
        text-align: center;
        font-size: 1.2rem;
        font-weight: 400;
    }
`;
