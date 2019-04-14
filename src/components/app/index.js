import {useState} from 'react'
import λ from 'react-on-lambda'
import actions from './actions'
import input from 'components/input'
import title from 'components/title'
import todoList from 'components/todo-list'
import wrapper from './wrapper.sc'

const initialState = [
  {key: 2, done: true, text: `Buy milk`},
  {key: 3, done: false, text: `Clean room`},
  {key: 6, done: false, text: `Find job...`},
]

function app() {
  const [todos, setState] = useState(initialState)
  const {addTodo, removeTodo, toogleTodo} = actions(todos, setState)

  return wrapper(
    title(`todos`),
    input({
      placeholder: `What needs to be done?`,
      onKeyPress: addTodo
    }),
    todoList(
      todos,
      toogleTodo,
      removeTodo,
    )
  )
}

export default λ(app)
