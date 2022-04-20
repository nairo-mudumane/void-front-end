import styled from "styled-components";

export const StyledContact = styled.div`
    background: #ffffff;
    box-shadow: 0px 0px 10px #0000001f;
    border-radius: 6px;

    height: 110px;
    padding: 1rem;
    margin-bottom: 1rem;

    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: space-between;
    align-items: center;

    transition: all 0.3s ease;

    &:hover {
        box-shadow: 0px 0px 25px #0000001f;
    }

    .avatar {
        margin-right: 2rem;
    }

    .details {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        align-content: flex-start;
        justify-content: space-between;
        align-items: flex-start;

        width: 100%;
        height: 100%;
    }

    .title {
        color: #0f001a;
        font-weight: bold;
    }

    .heading {
        width: 100%;

        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-between;
        align-items: flex-start;
    }

    .form {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-content: center;
        justify-content: space-between;
        align-items: center;
    }

    input {
        margin-right: 1rem;
        padding: 0.5rem 1rem;
    }

    .buttons {
        margin-top: 1rem;
        margin-left: auto;
        width: max-content;
    }
`;
