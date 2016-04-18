import React from 'react'
import ReactDom from 'react-dom'
import Voting from './components/Voting.jsx'

const pair = ['Trainspotting', '28 Days Later']

const index = () => {
  const domHook = document.getElementById('app')
  ReactDom.render(<Voting pair={pair} />, domHook)
}

index()
