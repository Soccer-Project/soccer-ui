import { BrowserRouter } from 'react-router-dom';
import {
  ChakraProvider,
  Heading
} from "@chakra-ui/react";
import MainRoutes from './routes';


function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Heading size="xs">
          Soccer
        </Heading>
        <MainRoutes />
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
