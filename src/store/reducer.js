import * as R from 'ramda'
import {ADD_TODO, REMOVE_TODO, TOGGLE_TODO} from './actions'
import {guid, createReducer} from './utils'

const initialState = {
  todos: [
    {id: guid(), done: true, text: `Buy milk`},
    {id: guid(), done: false, text: `Clean room`},
    {id: guid(), done: false, text: `Find job...`},
  ]
}

const reduceTodo = createReducer(
  initialState,
  [ADD_TODO, addTodo],
  [REMOVE_TODO, removeTodo],
  [TOGGLE_TODO, toggleTodo],
)

const findIndex = (action, state) => R.findIndex(
  R.propEq(`id`, action.id),
  state.todos
)

function addTodo(action) {
  const newTodo = {
    id: guid(),
    done: false,
    text: action.text,
  }
  return R.over(
    R.lensProp(`todos`),
    R.append(newTodo),
  )
}

function removeTodo(action, state) {
  const index = findIndex(action, state)
  return R.over(
    R.lensProp(`todos`),
    R.remove(index, 1),
    state
  )
}

function toggleTodo(action, state) {
  const index = findIndex(action, state)
  return R.over(
    R.lensPath([`todos`, index, `done`]),
    R.not,
    state
  )
}

export default reduceTodo
