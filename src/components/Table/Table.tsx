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
    player_id: string,
    players_name: string,
    games: number,
    goals: number,
    assists: number,
}

interface ITable {
    data: IPlayer[]
}
  
const Table = ({ data }: ITable) => {
    return(
        <CTable variant="striped" colorScheme="teal">
            <TableCaption>
            <a href="https://github.com/Soccer-Project" target="_blank" rel="noreferrer">
                Soccer Project on GitHub
            </a>
            </TableCaption>
            <Thead>
            <Tr>
                <Th>Player</Th>
                <Th>Games</Th>
                <Th>Goals</Th>
            </Tr>
            </Thead>
            <Tbody>
            {data.map( player => {
                return(
                <Tr key={player.player_id}>
                    <Td>{player.players_name}</Td>
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
