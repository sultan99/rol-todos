import λ from 'react-on-lambda'
import app from './index'
import {addTodo} from 'actions'
import {connect} from 'react-redux'

const actions = {
  addTodo
}

const enhance = λ.compose(
  λ, connect(null, actions)
)

export default enhance(app)
