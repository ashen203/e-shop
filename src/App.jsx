import { useState } from 'react'

// Import our custom CSS
import './scss/styles.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import nav from './components/navbar/nav';



function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <nav/>
    </>
  )
}

export default App
