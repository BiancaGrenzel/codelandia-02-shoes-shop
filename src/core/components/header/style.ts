import styled from "@emotion/styled";

export const Container = styled.image`
    display: flex;
    background-image: url(${require("../../assets/shoes-header-desktop.svg").default});
    background-repeat: no-repeat;
    background-size: cover;
    max-width: 100vw;
`

export const Mask = styled.div`
    display: flex;
    flex-direction: column;
    padding: 100px 80px;
    /* padding: 4% 4%; */
    gap: 26px;
    text-align: start;
    background-color: rgba(24, 24, 24, 0.6);
    width: 100%;
    max-width: 100vw;
`

export const Title = styled.h1`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 59px;
    color: #F9F9F9;
`

export const Subtitle = styled.h2`
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 160%;
    color: #F9F9F9;
`