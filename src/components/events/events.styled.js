import styled from "styled-components"

export const EventsBody = styled.section`
    background: linear-gradient(90deg, #091C15, #000000);
    width: 100vw;
    height: 100vh;
    margin: 0;
    align-content: center;
    justify-items: center;
    
    h2 {
        color: white;
        font-size: 48px;
    }
    
    div {
        gap: 40px;
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`

export const EventItem = styled.section`
    width: 320px;
    height: 480px;

    h3 {
        color: white;
        font-size: 20px;
        text-align: center;
    }

    img {
        align-self: center;
        height: 240px;
        mask-image: linear-gradient(270deg, #000000, transparent 110%)
    }

    div {
        font-size: 18px;
        color: white;
        text-align: justify;
    }
`