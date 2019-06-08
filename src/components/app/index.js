import input from 'components/input'
import title from 'components/title'
import todoList from 'components/todo-list/with-state'
import wrapper from './wrapper.sc'

const addTodo = props => event => {
  if (event.key === `Enter` && event.target.value) {
    const text = event.target.value
    event.target.value = ``
    return props.addTodo(text)
  }
}

const app = props => (
  wrapper(
    title(`todos`),
    input({
      placeholder: `What needs to be done? (hit enter)`,
      onKeyPress: addTodo(props)
    }),
    todoList
  )
)

export default app
