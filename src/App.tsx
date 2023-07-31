import { useState } from 'react'
import './App.css'
import { Button, ButtonGroup } from '@chakra-ui/react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Button colorScheme='blue'>Button</Button>
    </div>
  )
}

export default App
