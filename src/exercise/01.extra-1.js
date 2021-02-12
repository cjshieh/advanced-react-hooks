// useReducer: simple Counter Extra I
// http://localhost:3000/isolated/exercise/01.extra-1.js

import * as React from 'react'

function countReducer(state, change) {
  return state + change;
}

function Counter({ initialCount = 0, step = 1 }) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [count, changeCount] = React.useReducer(countReducer, initialCount);
  const increment = () => changeCount(step)
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
