import {createStore} from 'redux'
import todosReducer from './todos-reducer'

let middlewares

if (process.env.NODE_ENV === `development`) {
  const devtools = `__REDUX_DEVTOOLS_EXTENSION__`
  middlewares = window[devtools] && window[devtools]()
}

const store = createStore(
  todosReducer, middlewares
)

export default store
