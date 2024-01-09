import { useEffect, useState } from "react"

import { getDatosZelda } from "../../services"

import { DivBtns, BtnPage } from './styles'

import { GamesList } from "../GamesList"

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

