import { useState } from 'react'
import Title from "./components/Title"
import NameLength from './components/NameLength'
import NameReversed from './components/NameReversed'

function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <Title name={name}/>
      <NameLength name={name} />
      <NameReversed name={name} />
    </div>
  )
}

export default App
