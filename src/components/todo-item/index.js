import checkMark from './check-mark.sc'
import icoDelete from './ico-delete.sc'
import input from './input.sc'
import label from './label.sc'
import span from './span.sc'

const todoItem = ({id, done, text, toggleTodo, removeTodo}) => (
  label({key: id},
    input({
      type: `checkbox`,
      checked: done,
      onChange: () => toggleTodo(id)
    }),
    checkMark(),
    span(text),
    icoDelete({onClick: () => removeTodo(id)}, `💀`)
  )
)

export default todoItem
