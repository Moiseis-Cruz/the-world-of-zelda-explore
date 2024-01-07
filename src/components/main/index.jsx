import { useEffect, useState } from "react"

import { getDatosZelda } from "../../services"

import styled from "styled-components"

export const Main = () => {

    const [ gameZelda, setGameZelda ] = useState({game:[]})

    const [ pageIndex, setPageIndex ] = useState(0)

    useEffect(() => {
        const fetchData = async () => {
            const zeldaDatos = await getDatosZelda(pageIndex)

            setGameZelda({game: zeldaDatos})
        }
        fetchData()
    },[pageIndex])

    const handlePrevPage = () => {
        setPageIndex((state) => state - 1)
    }

    const handleNextPage = () => {
        setPageIndex((state) => state  + 1)
    }

    return(
        <section>
            {gameZelda.game.length > 0 ? <GamesList games={gameZelda.game} /> : "❌❌ Não há nada sobre a franquia ❌❌"}

            <DivBtns>
                <BtnPage onClick={handlePrevPage} disabled={pageIndex === 0}>
                    Prev Page
                </BtnPage>

                <BtnPage onClick={handleNextPage} disabled={pageIndex >= gameZelda.game.length} >
                    Next Page
                </BtnPage>
            </DivBtns>

        </section>
    )
}

export const GamesList = ({games}) => {
    return(
        <ListGames>
            {
                games.map((item, index) => {
                    return(
                        <li key={index}>
                            <Card>
                                <TitleCard>{item.name}</TitleCard>
                                <Subtitle><Emphasis>Developer:</Emphasis> {item.developer}</Subtitle>
                                <Subtitle><Emphasis>Publiser: </Emphasis>{item.publisher}</Subtitle>
                                <Date><Emphasis>Released Date: </Emphasis>{item.released_date}</Date>
                                <Description><Emphasis>Description: </Emphasis>{item.description}</Description>
                            </Card>
                        </li>
                    )
                })
            }
        </ListGames>
    )
}

const ListGames = styled.ul`
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    place-content: center;
    padding-top: 80px;
`

const Card = styled.div`
    border: 5px solid #686868;
    width: 340px;
    padding: 25px;
    border-radius: 30px 0 30px 0;
`

const Emphasis = styled.span`
    font-weight: 800;
    color: #06c7a0;
`

const TitleCard = styled.h2`
    height: 72px;
`

const Subtitle = styled.h3`
    margin-top: 10px;
    font-weight: 500;
`

const Date = styled.h4`
    font-weight: 500;
`

const Description = styled.p`
    height: 250px;
    overflow-y: scroll;
    margin-top: 20px;
    text-align: left;
    padding: 0 5px;
    font-weight: 300;
`

const DivBtns = styled.div `
    margin-top: 50px;
    display: flex;
    gap: 25px;
    align-items: center;
    justify-content: center;
`

const BtnPage = styled.button`
    background-color: #6a09af;
    color: #edecec;
    &:hover{
        box-shadow: 0 0 15px 5px #686868;
    }
    &:active{
        transform: scale(1.1);
    }
    &:disabled{
        box-shadow: none;
        transform: scale(1);
        cursor: no-drop;
        opacity: 0.5;
    }
`

/*
Released Date
*/