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
                            <ContainerDiv>
                                <h2>{item.name}</h2>
                                <h3><b>Developer:</b> {item.developer}</h3>
                                <h3><b>Publiser: </b>{item.publisher}</h3>
                                <h4><b>Released Date: </b>{item.released_date}</h4>
                                <p><b>Description: </b>{item.description}</p>
                            </ContainerDiv>
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
`

const ContainerDiv = styled.div`
    border: 5px solid white;
    width: 500px;
    padding: 30px;
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
    color: #e4e4e4;
    &:hover{
        box-shadow: 0 0 15px 5px black;
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