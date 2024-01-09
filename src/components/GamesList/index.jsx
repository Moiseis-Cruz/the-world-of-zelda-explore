import { ListGames, Card, Emphasis, TitleCard, Subtitle, Date, Description } from './styles'

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