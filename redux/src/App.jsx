import { useState } from 'react'
import './App.css'
import LikeCounterApp from './likeCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <LikeCounterApp/>
    </>
  )
}

export default App