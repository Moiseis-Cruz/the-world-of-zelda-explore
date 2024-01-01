import { useEffect, useState } from "react"
import styled from "styled-components"

async function getDatosZelda(pageIndex){
    const response = await fetch(`https://zelda.fanapis.com/api/games?limit=6&page=${pageIndex}`)
    const datos = await response.json()
    return datos.data
}

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
            <BtnPage onClick={handlePrevPage} disabled={pageIndex === 0}>Prev Page</BtnPage>
            <BtnPage onClick={handleNextPage} disabled={pageIndex >= gameZelda.game.length} >Next Page</BtnPage>
        </section>
    )
}

const GamesList = ({games}) => {
    return(
        <ul>
            {
                games.map((item, index) => {
                    return(
                        <li key={index}>
                            <div style={{border: '5px solid red'}}>
                                <h1>{item.name}</h1>
                                <h2><b>Developer:</b> {item.developer}</h2>
                                <h2><b>Publiser: </b>{item.publisher}</h2>
                                <h4><b>Released Date: </b>{item.released_date}</h4>
                                <p><b>Description: </b>{item.description}</p>
                            </div>
                        </li>
                    )
                })
            }
        </ul>
    )
}

const BtnPage = styled.button`
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
    }
`