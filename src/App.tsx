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

  const playersData: IPlayer[] = [
    {
      player_id: "1c93d8cc-9890-4475-964f-e58beb84f7c0",
      players_name: "Vinicius Junior",
      games: 101,
      goals: 20,
      assists: 16
    },
    {
      player_id: "59e11799-1710-4b19-a1d2-8e82a7c83d23",
      players_name: "Neymar",
      games: 67,
      goals: 37,
      assists: 26
    },
    {
      player_id: "88f6208a-9d32-4d10-aac7-0d05c6f5d1cd",
      players_name: "Gabriel Barbosa",
      games: 40,
      goals: 21,
      assists: 6
    },
    {
      player_id: "a38e3f47-a1ee-4a17-b32b-2d732debd6b8",
      players_name: "Messi",
      games: 99,
      goals: 72,
      assists: 41
    }
  ]

  // const [data, setData] = useState([])

  // useEffect(() => {
  //   const getData = async () => {
  //     // const response = await fetch('http://localhost:5000/players')
  //     setData(await response.json())
  //   }

  //   getData()
  // }, []);

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
          {playersData.map( (player: IPlayer) => {
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
