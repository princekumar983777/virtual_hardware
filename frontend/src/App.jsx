import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Navbar } from './components/Navbar/Navbar'
import Hero from './components/Hero/hero'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Hero />
      </div>
    </>
  )
}

export default App
