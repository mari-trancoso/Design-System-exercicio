import { ChakraProvider } from '@chakra-ui/react'
import { useState } from 'react'
import Button from "./Components/Button"
import Cards from "./Components/Cards"
import {products} from "./products"

function App() {

  const [produtos, setProdutos] = useState(products)

  console.log(produtos)
  return (
    <ChakraProvider>
      <h1>Olha elaaaaaa</h1>
      <Button/>
      {produtos.map((produto) => {
        return <Cards produto={produto} key={produto.id}/>
      })}
    </ChakraProvider>
  );
}

export default App;
