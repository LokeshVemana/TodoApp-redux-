import React from 'react'
import Counter from './Counter/Counter'
// import store from './redux/store'
// import {Store } from "./ReduxToolKit/Store"
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