import styled from 'styled-components';

export const Container = styled.div`
    > header {
        padding: 6.2rem 14.4rem;
        width: 100%;
        height: 14rem;
        background-color: ${({ theme }) => theme.COLORS.PINK_OPACITY};

        a {
            display: flex;
            align-items: center;
            color: ${({ theme }) => theme.COLORS.PINK};
        }
    }

    > form {
        margin: -8.4rem auto 0;
        max-width: 34rem;
        display: flex;
        align-items: center;
        flex-direction: column;

        > div:not(.form-header) {
            margin-top: 0.8rem;
            &:nth-child(4) {
                margin-top: 2.4rem;
            }
        }

        > button {
            margin-top: 2.4rem;
        }
    }

    .form-header {
        position: relative;
        width: 18.6rem;
        height: 18.6rem;
        margin-bottom: 6.4rem;

        img {
            width: 18.6rem;
            height: 18.6rem;
            border-radius: 50%;
            object-fit: cover;
        }

        label {
            position: absolute;
            display: grid;
            place-items: center;
            bottom: 0.7rem;
            right: 0.7rem;
            width: 4.8rem;
            height: 4.8rem;
            border-radius: 50%;
            background-color: ${({ theme }) => theme.COLORS.PINK};
            cursor: pointer;

            input {
                display: none;
            }
        }
    }
`;
