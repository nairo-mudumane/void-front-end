import styled from "styled-components";

export const StyledModal = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;

    .container {
        background: #fff;
        border-radius: 6px;

        width: 650px;
        padding: 1rem 2rem;
        margin: 0 auto;
        position: relative;
        top: 30%;
    }

    form {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-between;
        align-items: center;
    }

    input {
        margin: 1rem auto;
        padding: 0.5rem 1rem;
    }
`;
