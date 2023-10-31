import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    gap: 0.6rem;

    svg {
        color: ${({ theme }) => theme.COLORS.PINK};
    }
    .fill-star {
        fill: ${({ theme }) => theme.COLORS.PINK};
    }
`;
