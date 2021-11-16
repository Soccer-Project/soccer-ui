import {
    Table as CTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
} from "@chakra-ui/react"

interface IPlayer {
    data_season_id?: string,
    player_id: string,
    players_name?: string,
    games: number,
    goals: number,
    assists: number,
    playerId?: {
        name: string
    },
    seasonId?: {
        season_id: string,
        name: string
    }
}
interface ITable {
    data: IPlayer[],
    columns: string[]
}
  
const Table = ({ data, columns }: ITable) => {
    return(
        <CTable variant="striped" colorScheme="teal">
            <TableCaption>
            <a href="https://github.com/Soccer-Project" target="_blank" rel="noreferrer">
                Soccer Project on GitHub
            </a>
            </TableCaption>
            <Thead>
            <Tr>
                {
                    columns.map((column, index) => {
                        return(
                            <Th key={index}>
                                {column}
                            </Th>
                        )
                    })
                }
            </Tr>
            </Thead>
            <Tbody>
            {data.map( player => {
                return(
                <Tr key={player.player_id}>
                    { player.seasonId && <Td>{player.seasonId?.name}</Td> }
                    { player.players_name && <Td>{player.players_name}</Td>}
                    <Td>{player.games}</Td>
                    <Td>{player.goals}</Td>
                </Tr>
                )
            })}
            </Tbody>
        </CTable>
    )
}

export default Table
