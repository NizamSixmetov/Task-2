import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [appState, setAppState] = useState()
  const ApiUrl = 'https://jsonplaceholder.typicode.com/users'
  axios.get(ApiUrl).then((res) => {
    console.log(map(res));
  });
  return (
    <>
      <div>

      </div>
    </>
  )
}

export default App
