import { useState, useEffect } from 'react';
import {
  ChakraProvider,
  Heading
} from "@chakra-ui/react";

import Table from './components/Table/Table';

function App() {

  const [data, setData] = useState([])

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://soccerprojectapi.herokuapp.com/players')
      setData(await response.json())
    }

    getData()
  }, []);

  return (
    <ChakraProvider>
      <Heading size="xs">
        Soccer project
      </Heading>
      <Table data={data}/>
    </ChakraProvider>
  );
}

export default App;
