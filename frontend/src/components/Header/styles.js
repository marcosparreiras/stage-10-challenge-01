import styled from 'styled-components';

export const Container = styled.header`
    background-color: ${({ theme }) => theme.COLORS.GRAY_900};
    width: 100%;
    height: 8rem;
    padding: 2.4rem 12.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6.4rem;
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.GRAY_800};

    > h1 {
        color: ${({ theme }) => theme.COLORS.PINK};
        font-size: 2.4rem;
        font-weight: 700;
    }
`;

export const UserInfo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.9rem;

    img {
        width: 6.4rem;
        height: 6.4rem;
        border-radius: 50%;
    }

    > div {
        white-space: nowrap;
        text-align: end;

        a {
            color: ${({ theme }) => theme.COLORS.WHITE};
            color: #f4ede8;
            font-size: 1.4rem;
            font-weight: 700;
            display: block;
        }

        button {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            font-size: 1.4rem;
            font-weight: 400;
            background: none;
            border: none;
        }
    }
`;
