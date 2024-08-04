import { useState } from 'react'
import './App.css'

function App() {
  const [helloMessage, setHello] = useState("")

  return (
    <>
      <div className="card">
        <button onClick={() => setHello((helloMessage) => helloMessage + "Hello World! ")}>
          Hello World?
        </button>
        <p>
          {helloMessage}
        </p>
      </div>
    </>
  )
}

export default App
