import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Heading,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react"

function App() {

  interface IPlayer {
    player_id: string,
    players_name: string,
    games: number,
    goals: number,
    assists: number,
  }

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('http://localhost:5000/players')
      setData(await response.json())
    }

    getData()
  }, []);

  return (
    <ChakraProvider>
      <Heading size="xs">
        Soccer project
      </Heading>
      <Table variant="striped" colorScheme="teal">
        <TableCaption>
          <a href="https://github.com/Soccer-Project" target="_blank" rel="noreferrer">
            Soccer Project on GitHub
          </a>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Player</Th>
            <Th>Games</Th>
            <Th isNumeric>Goals</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map( (player: IPlayer) => {
            return(
              <Tr key={player.player_id}>
                <Td>{player.players_name}</Td>
                <Td>{player.games}</Td>
                <Td isNumeric>{player.goals}</Td>
              </Tr>
            )
          })}
        </Tbody>
      </Table>
    </ChakraProvider>
  );
}

export default App;
