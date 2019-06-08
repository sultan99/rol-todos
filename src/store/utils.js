import * as R from 'ramda'

export function guid() {
  const rnd = c => {
    const r = Math.random() * 16 | 0, v = c === `x` ? r : (r & 0x3 | 0x8)
    return v.toString(16)
  }

  return `xxxx-xxxx-4xxx-yxxx`.replace(/[xy]/g, rnd)
}

const toReducer = ([actionType, reducer]) => ([action, state]) => {
  if (actionType === action.type) {
    const result = reducer(action, state)
    const newState = R.is(Function, result) ? result(state) : result
    return [action, newState]
  }
  return [action, state]
}

export const createReducer = (initialState, ...reducers) => R.pipe(
  (state, action) => [action, state || initialState],
  ...reducers.map(toReducer),
  R.last
)
