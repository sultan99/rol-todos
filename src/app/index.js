import * as ρ from 'ramda'
import λ from 'react-on-lambda'
import React from 'react'
import input from 'components/input'
import title from 'components/title'
import todoList from 'components/todo-list'
import wrapper from './wrapper.sc'

class App extends React.Component {
  constructor(props) {
    super(props)
    const todos = [
      {key: 1, done: true, text: `Buy milk`},
      {key: 2, done: false, text: `Clean room`},
      {key: 3, done: false, text: `Find job...`},
    ]
    this.state = {todos}
  }
  toogleTodo = id => () => {
    const index = ρ.findIndex(
      ρ.propEq(`key`, id),
      this.state.todos
    )
    const todos = ρ.over(
      ρ.lensPath([index, `done`]),
      ρ.not,
      this.state.todos
    )
    this.setState({todos})
  }
  addTodo = ({key, target}) => {
    if (key !== `Enter` || !target.value) return
    const newTodo = {
      key: Math.random(),
      checked: false,
      text: target.value
    }
    const todos = ρ.append(newTodo, this.state.todos)
    this.setState({todos})
    target.value = ``
  }
  removeTodo = id => event => {
    event.preventDefault()
    const todos = ρ.filter(
      todo => todo.key !== id,
      this.state.todos
    )
    this.setState({todos})
  }
  render = () => wrapper(
    title(`todos`),
    input({
      placeholder: `What needs to be done?`,
      onKeyPress: this.addTodo
    }),
    todoList(
      this.state.todos,
      this.toogleTodo,
      this.removeTodo
    )
  )
}

export default λ(App)
