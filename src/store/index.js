import {createStore} from 'redux'
import devtools from './devtools'
import todosReducer from './reducer'

const store = createStore(
  todosReducer, devtools()
)

export default store
