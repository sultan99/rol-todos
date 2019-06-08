import checkbox from './checkbox.sc'
import checkMark from './check-mark.sc'
import icoDelete from './ico-delete.sc'
import label from './label.sc'
import span from './span.sc'

const handleClick = (id, removeTodo) => event => {
  event.preventDefault()
  removeTodo(id)
}

const todoItem = ({id, done, text, toggleTodo, removeTodo}) => (
  label(
    checkbox({
      checked: done,
      onChange: () => toggleTodo(id)
    }),
    checkMark(),
    span(text),
    icoDelete({onClick: handleClick(id, removeTodo)}, `💀`)
  )
)

export default todoItem
