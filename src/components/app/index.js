import λ from 'react-on-lambda'
import React from 'react'
import footer from 'components/footer'
import input from 'components/input'
import pane from './pane.sc'
import title from 'components/title'
import todoItem from 'components/todo-item'
import todoList from 'components/todo-list'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: [
        {key: 1, done: true, text: `Buy milk`},
        {key: 2, done: false, text: `Clean room`},
        {key: 3, done: false, text: `Find job...`},
      ]
    }
  }
  toogle = id => () => {
    const todos = this.state.todos.map(todo =>
      todo.key === id
        ? {...todo, done: !todo.done}
        : todo
    )
    this.setState({todos})
  }
  addTodo = event => {
    const text = event.target.value
    if (event.key !== `Enter` || !text) return
    const newTodo = {
      key: Math.random(),
      checked: false,
      text
    }
    const todos = [...this.state.todos, newTodo]
    event.target.value = ``
    this.setState({todos})
  }
  removeTodo = id => event => {
    event.preventDefault()
    const todos = this.state.todos.filter(todo =>
      todo.key !== id
    )
    this.setState({todos})
  }
  render = () => (
    pane(
      title(`todos`),
      input({
        placeholder: `What needs to be done?`,
        onKeyPress: this.addTodo
      }),
      todoList(
        this.state.todos.map(item =>
          todoItem({
            key: item.key,
            checked: item.done,
            text: item.text,
            onChange: this.toogle(item.key),
            onRemove: this.removeTodo(item.key),
          })
        )
      ),
      footer
    )
  )
}

export default λ(App)
