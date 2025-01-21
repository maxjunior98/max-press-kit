import styled from "styled-components";

export const HomeStyled = styled.div`
    @font-face {
    font-family: 'UnifrakturCook';
    font-style: normal;
    font-weight: 700;
    src: url(https://fonts.gstatic.com/s/unifrakturcook/v23/IurA6Yli8YOdcoky-0PTTdkm56n05Xwy1oM.woff2) format('woff2');
    unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
    }

    background: linear-gradient(90deg, #091C15, #000000);
    width: 100vw;
    height: 92vh;
    font-family: 'UnifrakturCook';
    display: flex;

    main {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: flex-end;
        justify-content: center;
    }

    span {
        height: 140px;
        color: white;
        font-size: 120px;
        font-weight: bold;
    }

    div {
        color: white;
        font-size: 32px;
    }

    section {
        width: 50%;
        display: flex;
        justify-content: flex-end;
    }

    img {
        align-self: center;
        height: 720px;
        mask-image: linear-gradient(270deg, #000000, transparent 100%)
    }
`