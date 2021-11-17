import {
    Table as CTable,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableCaption,
    Link
} from "@chakra-ui/react"

import { Link as LinkRouter } from "react-router-dom"
import { IPlayer } from "../../interfaces/player.interface"

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
                    <Tr key={player.players_player_id}>
                        { player.seasonId && <Td>{player.seasonId?.name}</Td> }
                        { player.players_name && 
                            <Td>
                                <Link as={LinkRouter} to={`/${player.players_player_id}`} >
                                    {player.players_name}
                                </Link>
                            </Td>
                        }
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
