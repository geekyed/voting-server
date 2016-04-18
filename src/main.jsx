import React from 'react'
import ReactDom from 'react-dom'
import Hello from './components/Hello.jsx'

const main = () => {
  const domHook = document.getElementById('app')
  ReactDom.render(<Hello />, domHook)
}

main()
