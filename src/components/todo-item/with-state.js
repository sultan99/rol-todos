import λ from 'react-on-lambda'
import todoItem from './index'
import {removeTodo, toggleTodo} from 'actions'
import {connect} from 'react-redux'

const actions = {
  toggleTodo,
  removeTodo
}

const enhance = λ.compose(
  λ, connect(null, actions)
)

export default enhance(todoItem)
