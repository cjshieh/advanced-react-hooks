// useReducer: simple Counter ExtraII
// http://localhost:3000/isolated/exercise/01.extra-2.js

import * as React from 'react'

function countReducer(state, payload) {
  return { ...state, ...payload }
}

function Counter({ initialCount = 0, step = 1 }) {
  // 🐨 replace React.useState with React.useReducer.
  // 💰 React.useReducer(countReducer, initialCount)
  const [state, setState] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const { count } = state
  const increment = () => setState({ count: count + step })
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
