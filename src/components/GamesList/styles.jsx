import styled from "styled-components"

export const ListGames = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    place-content: center;
    padding-top: 80px;
`

export const Card = styled.div`
    border: 5px solid #686868;
    width: 340px;
    padding: 25px;
    border-radius: 30px 0 30px 0;
`

export const Emphasis = styled.span`
    font-weight: 800;
    color: #06c7a0;
`

export const TitleCard = styled.h2`
    height: 72px;
`

export const Subtitle = styled.h3`
    margin-top: 10px;
    font-weight: 500;
`

export const Date = styled.h4`
    font-weight: 500;
`

export const Description = styled.p`
    height: 250px;
    overflow-y: scroll;
    margin-top: 20px;
    text-align: left;
    padding: 0 5px;
    font-weight: 300;
`
