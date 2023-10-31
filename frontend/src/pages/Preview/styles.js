import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    > main {
        padding: 5rem 12.3rem;
        height: calc(100% - 8rem);
        overflow-y: auto;

        > .link-conatiner {
            display: flex;
            align-items: center;
            justify-content: space-between;
            a {
                display: flex;
                align-items: center;
                gap: 0.8rem;
                color: ${({ theme }) => theme.COLORS.PINK};
            }
        }

        > p {
            margin-top: 4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            text-align: justify;
            font-size: 1.6rem;
            font-weight: 400;
        }

        .title {
            display: flex;
            gap: 1.9rem;
            align-items: center;
            margin-top: 2.4rem;

            h2 {
                color: ${({ theme }) => theme.COLORS.WHITE};
                font-size: 3.6rem;
                font-weight: 500;
            }
        }

        .infos {
            display: flex;
            gap: 0.8rem;
            align-items: center;
            margin-top: 2.4rem;

            > span {
                color: ${({ theme }) => theme.COLORS.WHITE};
                text-align: justify;
                font-size: 1.6rem;
                font-weight: 400;
            }

            > img {
                width: 1.6rem;
                height: 1.6rem;
                border-radius: 50%;
            }

            > svg {
                color: ${({ theme }) => theme.COLORS.PINK};
                width: 1.6rem;
                height: 1.6rem;
            }
        }

        .tags {
            display: flex;
            gap: 0.8rem;
            margin-top: 4rem;
        }
    }
`;
