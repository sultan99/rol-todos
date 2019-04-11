import checkbox from './checkbox.sc'
import checkMark from './check-mark.sc'
import icoDelete from './ico-delete.sc'
import label from './label.sc'
import span from './span.sc'

const todoItem = ({id, done, text, toggleTodo, removeTodo}) => (
  label(
    checkbox({
      checked: done,
      onChange: () => toggleTodo(id)
    }),
    checkMark(),
    span(text),
    icoDelete({onClick: () => removeTodo(id)}, `💀`)
  )
)

export default todoItem
