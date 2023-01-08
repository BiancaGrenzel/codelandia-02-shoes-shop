import styled from "@emotion/styled";

export const Section = styled.div`
    display: flex;
    flex-direction: column;
`

export const Container = styled(Section)`
    justify-content: space-between;
    height: 100vh;
    max-height: 100vh;
`

export const ListCards = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding: 4% 4%;
    gap: 20px;
    overflow: auto;
    justify-content: center;
`