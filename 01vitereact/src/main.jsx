import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


// const reactElement = {
//     type: 'a',
//     props: {
//         href: 'https://www.google.com',
//         target: '_blank',
//     },
//     children: 'Click me to visit google'
// }
const anotherUser = "Avika"

const anotherElement = (
  <a href="https://google.com" target='_blank' >visit google</a>
)

const reactElement = React.createElement(
  'a',
  {href: "https://google.com", target: '_blank'},
  'click me to visit google',
  anotherUser
)

createRoot(document.getElementById('root')).render(
  <App />
)
