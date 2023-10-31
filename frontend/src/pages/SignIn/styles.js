import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    height: 100vh;
    width: 100%;

    > main {
        flex-grow: 2;
        width: fit-content;
        padding: 23.5rem 12.4rem;

        h1 {
            color: ${({ theme }) => theme.COLORS.PINK};
            font-size: 48px;
            font-weight: 700;
        }

        p {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
            font-size: 1.4rem;
        }

        a {
            color: ${({ theme }) => theme.COLORS.PINK};
            text-align: center;
            margin-top: 4.8rem;
            display: block;
        }

        form {
            margin-top: 4.8rem;

            h2 {
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-size: 2.4rem;
                font-weight: 500;
                margin-bottom: 4.8rem;
            }

            div {
                margin-bottom: 0.8rem;
            }

            button {
                margin-top: 2.4rem;
            }
        }
    }

    > img {
        flex-grow: 3;
        object-fit: cover;
    }
`;
