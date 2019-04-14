import * as ρ from 'ramda'

const actions = (todos, setState) => ({
  addTodo({key, target}) {
    if (key !== `Enter` || !target.value) return
    const setTodos = ρ.pipe(
      ρ.append({
        key: Math.random(),
        checked: false,
        text: target.value
      }),
      setState,
      () => target.value = ``
    )
    setTodos(todos)
  },
  removeTodo: id => event => {
    event.preventDefault()
    const setTodos = ρ.pipe(
      ρ.filter(todo => todo.key !== id),
      setState
    )
    setTodos(todos)
  },
  toogleTodo: id => () => {
    const index = ρ.findIndex(
      ρ.propEq(`key`, id),
      todos
    )
    const setTodos = ρ.pipe(
      ρ.over(
        ρ.lensPath([index, `done`]),
        ρ.not
      ),
      setState
    )
    setTodos(todos)
  }
})

export default actions
