import { useState } from 'react'
import './App.css'
import Home from './Pages/Home'
import ComingSoon from './Pages/ComngSoon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
      {/* <ComingSoon/> */}
    </>
  )
}

export default App
