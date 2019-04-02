import * as ρ from 'ramda'
import {ADD_TODO, TOGGLE_TODO, REMOVE_TODO} from './actions'

const initialState = {
  todos: [
    {id: 1, done: true, text: `Buy milk`},
    {id: 2, done: false, text: `Clean room`},
    {id: 3, done: false, text: `Find job...`},
  ]
}

const findIndex = (id, list) => ρ.findIndex(
  ρ.propEq(`id`, id),
  list
)

const todosReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO: {
      const newTodo = {
        id: Math.random(),
        checked: false,
        text: action.text
      }
      const todos = ρ.append(
        newTodo, state.todos
      )
      return {todos}
    }
    case REMOVE_TODO: {
      const index = findIndex(action.id, state.todos)
      const todos = ρ.remove(index, 1, state.todos)
      return {todos}
    }
    case TOGGLE_TODO: {
      const index = findIndex(action.id, state.todos)
      const setState = ρ.over(
        ρ.lensPath([`todos`, index, `done`]),
        ρ.not
      )
      return setState(state)
    }
    default:
      return state
  }
}

export default todosReducer
