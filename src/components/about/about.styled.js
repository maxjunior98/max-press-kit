import styled from "styled-components";

export const AboutStyled = styled.div`
    background: linear-gradient(90deg, #091C15, #000000);
    width: 100vw;
    height: 92vh;
    display: flex;
    flex-direction: line;
    justify-content: center;
    align-items: center;
    gap: 64px;

    main {
        margin-top: 50vh;
    }
    
    section {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }

    span {
        max-width: 40vw;
        height: 128px;
        font-size: 48px;
        color: white;
        font-weight: bold;
        text-align: center;
    }

    div {
        width: 40vw;
        color: white;
        text-align: justify;
        font-size: 20px;
    }

    img {
        width: 280px;
        border-radius: 132px;
    }
`