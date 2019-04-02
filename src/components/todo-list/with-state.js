import λ from 'react-on-lambda'
import todoList from 'components/todo-list'
import {connect} from 'react-redux'

const props = state => ({
  todos: state.todos
})

const enhance = λ.compose(
  λ, connect(props)
)

export default enhance(todoList)
