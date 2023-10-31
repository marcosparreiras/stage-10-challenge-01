import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};
    padding: 3.2rem;
    border-radius: 1.6rem;

    > h2 {
        color: ${({ theme }) => theme.COLORS.WHITE};
        font-size: 2.4rem;
        font-weight: 700;
        margin-bottom: 0.8rem;
    }

    > p {
        margin: 1.5rem 0;
        color: ${({ theme }) => theme.COLORS.GRAY_300};
        height: 4rem;
        text-align: justify;
        overflow: hidden;
    }

    > div {
        display: flex;
        align-items: center;
        gap: 0.8rem;
    }
`;
