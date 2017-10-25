import React from 'react'
import logo from './assets/logo.svg'
import './App.css'

import Counter from 'components/Counter'

const App = () => (
  <div className='App'>
    <div className='App-header'>
      <img src={logo} className='App-logo shake-rotate' alt='logo' />
    </div>
    <Counter />
  </div>
)

export default App
