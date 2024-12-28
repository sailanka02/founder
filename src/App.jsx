import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './assets/header'
import HeroSection from './assets/hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Header/>
        <HeroSection/>
    </>
  )
}

export default App
