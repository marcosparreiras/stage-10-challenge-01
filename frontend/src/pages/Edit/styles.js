import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    > main {
        padding: 5rem 12.3rem;
        height: calc(100% - 8rem);
        overflow-y: auto;

        > a {
            display: flex;
            align-items: center;
            gap: 0.8rem;
            color: ${({ theme }) => theme.COLORS.PINK};
        }

        > h2 {
            margin-top: 2.4rem;
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 3.6rem;
            font-weight: 500;
        }

        > form {
            margin-top: 4rem;
            display: flex;
            flex-direction: column;
            gap: 4rem;

            textarea {
                padding: 1.9rem 1.6rem;
                width: 100%;
                height: 24rem;
                border: none;
                outline: none;
                background-color: ${({ theme }) => theme.COLORS.GRAY_600};
                color: ${({ theme }) => theme.COLORS.WHITE};

                border-radius: 1rem;
                resize: none;
            }

            h3 {
                color: ${({ theme }) => theme.COLORS.GRAY_300};
                font-size: 2rem;
                font-weight: 400;
            }

            .flex {
                display: flex;
                gap: 4rem;
            }

            .mark-inputs {
                display: flex;
                margin-top: 2.4rem;
                gap: 2.4rem;
                flex-wrap: wrap;
            }
        }
    }
`;
