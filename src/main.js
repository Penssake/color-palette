import React from 'react'
import ReactDom from 'react-dom'
import App from './components/app'

let container = document.createElement('div')
container.className = 'root'
document.body.appendChild(container)

ReactDom.render(
    <App />
  , container)