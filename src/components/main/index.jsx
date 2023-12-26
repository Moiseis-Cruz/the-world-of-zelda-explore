import { useEffect, useState } from "react"

async function getDatosZelda(){
    const response = await fetch('https://zelda.fanapis.com/api/games')
    const datos = await response.json()
    return datos.data
}

export const Main = () => {

    const [ gameZelda, setGameZelda ] = useState({game:[]})

    const GamesList = (props) => {
        return(
            <ul>
                {
                    props.games.map((item, index) => {
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

    useEffect(() => {
        const fetchData = async () => {
            const zeldaDatos = await getDatosZelda()

            setGameZelda({game: zeldaDatos})
        }
        fetchData()
    },[])

    return(
        <section>
            {gameZelda.game.length > 0 ? <GamesList games={gameZelda.game} /> : "❌❌ Não há nada sobre a franquia ❌❌"}
            <button>Prev Page</button>
            <button>Next Page</button>
        </section>
    )
}