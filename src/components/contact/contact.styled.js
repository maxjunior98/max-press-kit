import styled from "styled-components"

export const ContactStyled = styled.div`
    background: linear-gradient(90deg, #091C15, #000000);
    width: 100vw;
    height: 420px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    h2 {
        color: white;
        font-size: 48px;
    }

    div {
        color: white;
        font-size: 20px;
    }

    button {
        cursor: pointer;
        display: flex;
        width: 30%;
        height: 40px;
        border-radius: 8px;
        font-size: 18px;
        font-weight: bold;
        align-items: center;
        justify-content: center;
        gap: 32px;
        background-color: #8bc2cc;
    }
`