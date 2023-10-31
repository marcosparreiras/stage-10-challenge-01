import styled from 'styled-components';

export const Container = styled.div`
    height: 100vh;

    > main {
        padding: 5rem 12.3rem;
        height: calc(100% - 8rem);
        display: flex;
        flex-direction: column;
    }

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;

        > h2 {
            color: ${({ theme }) => theme.COLORS.WHITE};
            font-size: 3.2rem;
            font-weight: 400;
        }

        > a {
            width: 18rem;
        }
    }

    .card-container {
        margin: 4rem 0;
        display: flex;
        flex-direction: column;
        gap: 2.4rem;
        overflow-y: auto;
        padding-right: 1rem;
    }
`;
