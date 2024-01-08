import { useEffect, useState } from "react"

import { getDatosZelda } from "../../services"

import { ListGames, Card, Emphasis, TitleCard, Subtitle, Date, Description, DivBtns, BtnPage } from './styles'

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