import { useState } from 'react'
import LinkBox from './LinkBox.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <LinkBox />
    </div>
  )
}

export default App
