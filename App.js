import React from 'react'
import Counter from './Counter/Counter'

import "./App.css";
import { Provider } from 'react-redux'
import Todo from './TodoList/Todo'
import store from './To-DO/store'
const App = () => {
  return (
    <Provider store={store}>
      <Todo/>
      {/* <Counter/> */}
    </Provider>
  )
}

export default App
