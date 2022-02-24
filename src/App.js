import { useState } from 'react'

import { reverse } from './helpers'
import './styles.css'

export default function App() {
  const [name, setName] = useState('Nicolas')

  return (
    <div className="app">
      <h1 className="title">Welcome, {name}!</h1>
      <p className="name-length">
        Did you know that {name} is {name.length} characters long?!
      </p>
      <p className="name-reversed">
        Also, {name} backwards is {reverse(name)}
      </p>
    </div>
  )
}
