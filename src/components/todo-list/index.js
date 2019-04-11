import λ from 'react-on-lambda'
import todoItem from 'components/todo-item/with-state'
import wrapper from './wrapper.sc'

const todoList = λ.compose(
  wrapper,
  λ.mapKey(todoItem),
  props => props.todos
)

export default todoList
